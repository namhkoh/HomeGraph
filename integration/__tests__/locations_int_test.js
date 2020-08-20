const fetch = require('node-fetch');

describe('Locations', () => {
  it('queries all the locations', async () => {
    const query = `
            {
                getLocations {
                  name
                  locationId
                  countryCode
                  latitude
                  longitude
                  regionRadius
                  temperatureScale
                  timeZoneId
                  locale
                }
            }
        `;

    const queryStr = encodeURI(query);
    const response = await fetch(
      `http://localhost:4000/graphql/?query=${queryStr}`
    );
    const responseObj = await response.json();
    expect(responseObj.data).not.toBeNull();
    expect(responseObj.data).not.toBeUndefined();
    expect(responseObj.data.getLocations[0].name).toEqual('My home');
    expect(responseObj.data.getLocations[0].locationId).toEqual(
      '984e1474-d376-4760-911b-6d259d11105e'
    );
    expect(responseObj.data.getLocations[0]).toHaveProperty('countryCode');
    expect(responseObj.data.getLocations[0]).toHaveProperty('latitude');
    expect(responseObj.data.getLocations[0]).toHaveProperty('longitude');
    expect(responseObj.data.getLocations[0]).toHaveProperty('regionRadius');
    expect(responseObj.data.getLocations[0]).toHaveProperty('temperatureScale');
    expect(responseObj.data.getLocations[0]).toHaveProperty('timeZoneId');
    expect(responseObj.data.getLocations[0]).toHaveProperty('locale');
  });

  it('Queries a specific location by Name', async () => {
    const query = `{
      getLocation(for: {name: "My home"}) {
      name
      locationId
      countryCode
      latitude
      longitude
      regionRadius
      temperatureScale
      timeZoneId
      locale
  }}
    `;
    const queryStr = encodeURI(query);
    const response = await fetch(
      `http://localhost:4000/graphql/?query=${queryStr}`
    );
    const responseObj = await response.json();
    expect(responseObj.data).not.toBeNull();
    expect(responseObj.data).not.toBeUndefined();
    expect(responseObj.data.getLocation.locationId).toEqual(
      '984e1474-d376-4760-911b-6d259d11105e'
    );
    expect(responseObj.data.getLocation).toHaveProperty('countryCode');
    expect(responseObj.data.getLocation).toHaveProperty('latitude');
    expect(responseObj.data.getLocation).toHaveProperty('longitude');
    expect(responseObj.data.getLocation).toHaveProperty('regionRadius');
    expect(responseObj.data.getLocation).toHaveProperty('temperatureScale');
    expect(responseObj.data.getLocation).toHaveProperty('timeZoneId');
    expect(responseObj.data.getLocation).toHaveProperty('locale');
  });

  it('Queries a specific location by LocationId', async () => {
    const query = `{
      getLocation(for: {locationId: "984e1474-d376-4760-911b-6d259d11105e"}) {
      name
      locationId
      countryCode
      latitude
      longitude
      regionRadius
      temperatureScale
      timeZoneId
      locale
  }}
    `;
    const queryStr = encodeURI(query);
    const response = await fetch(
      `http://localhost:4000/graphql/?query=${queryStr}`
    );
    const responseObj = await response.json();
    expect(responseObj.data).not.toBeNull();
    expect(responseObj.data).not.toBeUndefined();
    expect(responseObj.data.getLocation.name).toEqual('My home');
    expect(responseObj.data.getLocation).toHaveProperty('countryCode');
    expect(responseObj.data.getLocation).toHaveProperty('latitude');
    expect(responseObj.data.getLocation).toHaveProperty('longitude');
    expect(responseObj.data.getLocation).toHaveProperty('regionRadius');
    expect(responseObj.data.getLocation).toHaveProperty('temperatureScale');
    expect(responseObj.data.getLocation).toHaveProperty('timeZoneId');
    expect(responseObj.data.getLocation).toHaveProperty('locale');
  });

  it('Gets FirehazardIndex for Location', async () => {
    const query = `{
      getLocation(for: {name: "My home"}) {
        fireHazard
      }
    }
    `;
    const queryStr = encodeURI(query);
    const response = await fetch(
      `http://localhost:4000/graphql/?query=${queryStr}`
    );
    const responseObj = await response.json();
    expect(responseObj.data).not.toBeNull();
    expect(responseObj.data).not.toBeUndefined();
    expect(responseObj.data.getLocation).toHaveProperty('fireHazard');
  });

  it('creates and deletes a location with a room', async () => {
    const addMutation = `
        mutation {
          addNewLocation(input: {
            name: "test",
            countryCode: USA,
            latitude: 45.00708112,
            longitude: -93.11223629,
          regionRadius: 150,
          temperatureScale: F,
          locale: en}
          ) {
            locationId
          }
        }
    `;
    const queryStr = encodeURI(addMutation);
    const response = await fetch(
      `http://localhost:4000/graphql/?query=${queryStr}`,
      {
        method: 'post',
      }
    );
    const responseObj = await response.json();
    expect(responseObj.data).not.toBeNull();
    expect(responseObj.data).not.toBeUndefined();
    expect(responseObj.data.addNewLocation.locationId).not.toBeNull();
    expect(responseObj.data.addNewLocation.locationId).not.toBeUndefined();
    const newLocationId = responseObj.data.addNewLocation.locationId;

    const createRoomMutation = `
        mutation {
          createRoom(input: {roomName: "foo", location: {name: "test"}}) {
            __typename
            roomId
            name
          }
    }
    `;

    const crQueryStr = encodeURI(createRoomMutation);
    const crResponse = await fetch(
      `http://localhost:4000/graphql/?query=${crQueryStr}`,
      {
        method: 'post',
      }
    );
    const crResponseObj = await crResponse.json();
    expect(crResponseObj.data.createRoom).not.toBeNull();
    expect(crResponseObj.data.createRoom).not.toBeUndefined();
    expect(crResponseObj.data.createRoom.name).toEqual('foo');
    expect(crResponseObj.data.createRoom.__typename).toEqual('STRoom');

    const deleteOfficeMutation = `
          mutation {
          deleteRoom(input: {roomName: "foo", location: {name: "test"}}) {
            status
          }
      }
    `;
    const drQueryStr = encodeURI(deleteOfficeMutation);
    const drResponse = await fetch(
      `http://localhost:4000/graphql/?query=${drQueryStr}`,
      {
        method: 'post',
      }
    );
    const drResponseObj = await drResponse.json();
    expect(drResponseObj.data.deleteRoom).not.toBeNull();
    expect(drResponseObj.data.deleteRoom).not.toBeUndefined();
    expect(drResponseObj.data.deleteRoom.status).toEqual('OK');

    const createOfficeMutation = `
        mutation {
          createRoom(input: {roomName: "Office", location: {name: "test"}}) {
            __typename
            roomId
            name
          }
    }
    `;

    const coQueryStr = encodeURI(createOfficeMutation);
    const coResponse = await fetch(
      `http://localhost:4000/graphql/?query=${coQueryStr}`,
      {
        method: 'post',
      }
    );
    const coResponseObj = await coResponse.json();
    expect(coResponseObj.data.createRoom).not.toBeNull();
    expect(coResponseObj.data.createRoom).not.toBeUndefined();
    expect(coResponseObj.data.createRoom.name).toEqual('Office');
    expect(coResponseObj.data.createRoom.__typename).toEqual('Office');

    const deleteMutation = `
      mutation {
        deleteLocation(for: {locationId: "${newLocationId}"}) {
          status
        }
      }
    `;
    const delQueryStr = encodeURI(deleteMutation);
    const delResponse = await fetch(
      `http://localhost:4000/graphql/?query=${delQueryStr}`,
      {
        method: 'post',
      }
    );
    const delResponseObj = await delResponse.json();
    const responseText = delResponseObj.data.deleteLocation.status;
    expect(responseObj.data).not.toBeNull();
    expect(responseObj.data).not.toBeUndefined();
    expect(responseText).toEqual('OK');
  });
});
