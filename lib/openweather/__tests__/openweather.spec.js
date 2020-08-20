const { getWeatherForLocation, Weather } = require('../openweather');

const openWeatherFixture = {
  coord: { lon: -122.05, lat: 37.4 },
  weather: [
    { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' },
  ],
  base: 'stations',
  main: {
    temp: 286.9,
    feels_like: 282.27,
    temp_min: 284.82,
    temp_max: 289.26,
    pressure: 1022,
    humidity: 50,
  },
  visibility: 16093,
  wind: { speed: 4.6, deg: 270 },
  clouds: { all: 75 },
  dt: 1585344967,
  sys: {
    type: 1,
    id: 5310,
    country: 'US',
    sunrise: 1585317609,
    sunset: 1585362381,
  },
  timezone: -25200,
  id: 5375480,
  name: 'Mountain View',
  cod: 200,
};

describe('Weather API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('returns null', async () => {
    expect(await getWeatherForLocation({})).toEqual(null);
  });

  it('returns null with only lat', async () => {
    expect(await getWeatherForLocation({ latitude: 37.40231 })).toEqual(null);
  });

  it('returns a weather object', async () => {
    fetch.mockResponseOnce(JSON.stringify(openWeatherFixture));
    const response = await getWeatherForLocation({
      latitude: 37.40231,
      longitude: -122.04779,
    });
    expect(response).not.toEqual(undefined);
    expect(response.location).toEqual('Mountain View');
    expect(response.condition).toEqual(803);
    expect(response.description).toEqual('broken clouds');
    expect(response.temperature).toEqual(286.9);
    expect(response.pressure).toEqual(1022);
    expect(response.humidity).toEqual(50);
    expect(response.wind_speed).toEqual(4.6);
    expect(response.wind_direction).toEqual(270);
    expect(response.cloud_cover).toEqual(75);
    expect(response.rain_volume).toEqual(0);
    expect(response.snow_volume).toEqual(0);
  });
});
