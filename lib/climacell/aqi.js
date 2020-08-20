/* eslint-disable camelcase */
const fetch = require('node-fetch');
const querystring = require('querystring');

class AirQuality {
  constructor({
    observation_time,
    pollen_grass,
    pollen_weed,
    pollen_tree,
    epa_health_concern,
    so2,
    co,
    no2,
    pm10,
    pm25,
    epa_primary_pollutant,
    epa_aqi,
  }) {
    this.time = observation_time.value;
    this.epaAqi = epa_aqi.value;
    this.epaPrimaryPollutant = epa_primary_pollutant.value;
    this.pm25 = pm25.value;
    this.pm10 = pm10.value;
    this.no2 = no2.value;
    this.co = co.value;
    this.so2 = so2.value;
    this.epaHealthConcern = epa_health_concern.value;
    this.pollenTree = pollen_tree.value ? pollen_tree.value : 0;
    this.pollenWeed = pollen_weed.value ? pollen_weed.value : 0;
    this.pollenGrass = pollen_grass.value ? pollen_grass.value : 0;
  }
}

const getAirQuality = async ({ latitude, longitude }) => {
  const qsObj = {
    lat: `${latitude}`,
    lon: `${longitude}`,
    unit_system: 'si',
    apikey: `${process.env.CLIMACELL_API}`,
    fields: [
      'so2',
      'co',
      'pm25',
      'pm10',
      'no2',
      'epa_aqi',
      'epa_primary_pollutant',
      'epa_health_concern',
      'pollen_tree',
      'pollen_weed',
      'pollen_grass',
    ],
  };
  if (qsObj.apikey) {
    const queryString = querystring.stringify(qsObj);
    const response = await fetch(
      `https://api.climacell.co/v3/weather/realtime?${queryString}`
    );
    const responseObj = await response.json();
    const aqi = new AirQuality(responseObj);
    return aqi;
  }
  return null;
};

exports.getAirQuality = getAirQuality;
exports.AirQuality = AirQuality;
