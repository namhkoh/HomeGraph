const { Locations } = require('../graphutils/locations');

const locationsFixture = {
  items: [
    {
      locationId: '984e1474-d376-4760-911b-6d259d11105e',
      name: 'My home',
      countryCode: 'USA',
      latitude: 37.402058,
      longitude: -122.0477,
      regionRadius: 250,
      temperatureScale: 'F',
      timeZoneId: 'America/Los_Angeles',
      locale: 'en',
    },
  ],
  _links: null,
};

describe('Locations', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Constructor', () => {
    const subject = new Locations();
    expect(subject.locations.length).toEqual(0);
  });

  it.skip('Loads Locations', async () => {
    fetch.mockResponseOnce(JSON.stringify(locationsFixture));

    const subject = new Locations();
    await subject.loadLocations();
    expect(subject.locations.length).toEqual(0);
  });
});
