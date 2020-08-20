require('dotenv').config();

const { getFireDangerIndex } = require('../fire');

const dataFixture = {
  lat: 38.28159,
  lon: -122.29445,
  fire_index: {
    value: 4.4375,
  },
  observation_time: {
    value: '2020-05-22T16:18:31.162Z',
  },
};

describe('climacell fire_index', () => {
  it('gets the current fire index between 1 - 100', async () => {
    fetch.mockResponse(JSON.stringify(dataFixture));
    const data = await getFireDangerIndex({
      latitude: 37.402058,
      longitude: -122.0477,
    });
    expect(data).not.toBeUndefined();
    expect(typeof data).toEqual('number');
  });
});
