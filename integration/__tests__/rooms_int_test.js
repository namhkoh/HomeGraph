const fetch = require('node-fetch');

describe('Room', () => {
  it('getRoom by roomId', async () => {
    const query = `
     {
        getRoom(for: {location: {name: "My home"}, roomId: "4f4c4486-a36e-4e52-b38f-0bf2dea99ed2"}) {
        name
        locationId
        __typename
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
    expect(responseObj.data.getRoom).not.toBeNull();
    expect(responseObj.data.getRoom.name).toEqual('Kitchen');
    expect(responseObj.data.getRoom.locationId).toEqual(
      '984e1474-d376-4760-911b-6d259d11105e'
    );
    expect(responseObj.data.getRoom.__typename).toEqual('STRoom');
  });

  it('getRoom by Name', async () => {
    const query = `
     {
        getRoom(for: {location: {name: "My home"}, name: "Kitchen"}) {
        name
        locationId
        __typename
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
    expect(responseObj.data.getRoom).not.toBeNull();
    expect(responseObj.data.getRoom.name).toEqual('Kitchen');
    expect(responseObj.data.getRoom.locationId).toEqual(
      '984e1474-d376-4760-911b-6d259d11105e'
    );
    expect(responseObj.data.getRoom.__typename).toEqual('STRoom');
  });
});
