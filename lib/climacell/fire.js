const fetch = require('node-fetch');
const querystring = require('querystring');

const getFireDangerIndex = async ({ latitude, longitude }) => {
  const qsObj = {
    lat: `${latitude}`,
    lon: `${longitude}`,
    unit_system: 'si',
    apikey: `${process.env.CLIMACELL_API}`,
    fields: ['fire_index'],
  };
  if (qsObj.apikey) {
    const queryString = querystring.stringify(qsObj);
    const response = await fetch(
      `https://api.climacell.co/v3/weather/realtime?${queryString}`
    );
    const responseObj = await response.json();
    return responseObj.fire_index.value;
  }
  return null;
};

exports.getFireDangerIndex = getFireDangerIndex;
