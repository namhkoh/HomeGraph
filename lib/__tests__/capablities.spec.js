const { getDevicesWithCapability } = require('../graphutils/capabilities');

/**
 * skipped because it is not mocked
 */
describe('getCapabilityStatus', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it.skip('gets the temperature status', async () => {
    fetch.disableMocks();
    require('jest-fetch-mock').dontMock();

    const result = await getDevicesWithCapability(
      'beede99d-575f-4b88-b7d2-599ff77fbce0',
      'main',
      'temperatureMeasurement'
    );
    expect(result.length).toEqual(61);
  });
});
