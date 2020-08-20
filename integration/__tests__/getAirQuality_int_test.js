const fetch = require('node-fetch');

describe('getAirQuality', () => {
  it('gets air quality conditions for location', async () => {
    const query = `
      {
        getAirQuality(location: {name: "My home"}) {
          time
          epaAqi
          epaPrimaryPollutant
          pm25
          pm10
          no2
          co
          so2
          epaHealthConcern
          pollenTree
          pollenWeed
          pollenGrass
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
    expect(responseObj.data.getAirQuality).not.toBeNull();
    expect(responseObj.data.getAirQuality).not.toBeUndefined();
  });
});
