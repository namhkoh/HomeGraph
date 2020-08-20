const api = require('@what3words/api');

const getWhatThreeWords = async ({ latitude, longitude }) => {
  if (process.env.WTW_API) {
    api.setOptions({ key: `${process.env.WTW_API}` });
    const response = await api.convertTo3wa({ lat: latitude, lng: longitude });
    return response.words;
  }
  return 'not enabled';
};

exports.getWhatThreeWords = getWhatThreeWords;
