require('dotenv').config();

const { getAirQuality, AirQuality } = require('../aqi');

const dataFixture = {
  lat: 37.402058,
  lon: -122.0477,
  epa_aqi: {
    value: 32,
  },
  epa_primary_pollutant: {
    value: 'o3',
  },
  pm25: {
    value: 8,
    units: 'µg/m3',
  },
  pm10: {
    value: 21,
    units: 'µg/m3',
  },
  no2: {
    value: 6,
    units: 'ppb',
  },
  co: {
    value: 3,
    units: 'ppm',
  },
  so2: {
    value: 8,
    units: 'ppb',
  },
  epa_health_concern: {
    value: 'Good',
  },
  pollen_tree: {
    value: 1,
    units: 'Climacell Pollen Index',
  },
  pollen_weed: {
    value: null,
    units: 'Climacell Pollen Index',
  },
  pollen_grass: {
    value: 0,
    units: 'Climacell Pollen Index',
  },
  observation_time: {
    value: '2020-05-21T22:30:55.811Z',
  },
};

describe('climacell', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('returns air quality', async () => {
    fetch.mockResponse(JSON.stringify(dataFixture));
    const data = await getAirQuality({
      latitude: 37.402058,
      longitude: -122.0477,
    });

    expect(data).not.toBeUndefined();
    expect(data).toBeInstanceOf(AirQuality);
    expect(data.pollenGrass).toEqual(0);
  });
});
