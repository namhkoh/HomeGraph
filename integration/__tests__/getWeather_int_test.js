const fetch = require('node-fetch');

describe('getWeather', () => {
  it('gets Weather conditions for location', async () => {
    const query = `
      {
        getWeather(location: {name: "My home"}) {
          timestamp
          location
          condition
          description
          temperature
          pressure
          humidity
          wind_speed
          wind_direction
          cloud_cover
          rain_volume
          snow_volume
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
    expect(responseObj.data.getWeather).not.toBeNull();
    expect(responseObj.data.getWeather).not.toBeUndefined();
  });
});
