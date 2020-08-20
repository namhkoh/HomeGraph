const fetch = require('node-fetch');

describe('Devices', () => {
  it('queries all devices with paging', async () => {
    const query = `
      {
        getAllDevices(max: 5, page: 1) {
          more
          nextPage
          devices {
            deviceId
            name
            label
            deviceTypeId
            deviceTypeName
            deviceNetworkType
          }
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
    expect(responseObj.data.getAllDevices.more).toBeTruthy();
    expect(responseObj.data.getAllDevices.nextPage).toEqual('2');
    expect(responseObj.data.getAllDevices.devices.length).not.toEqual(0);
  });

  it('queries all devices by typeID', async () => {
    const motionSensorType = '821425e6-b305-468a-9a27-db0e4852ce3a';
    const query = `
      {
        getAllDevicesOfType(typeId: "${motionSensorType}") {
            nextPage
            more
            devices {
              name
            }
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
    expect(responseObj.data.getAllDevicesOfType.more).toBeFalsy();
    expect(responseObj.data.getAllDevicesOfType.nextPage).toEqual(null);
    expect(responseObj.data.getAllDevicesOfType.devices.length).not.toEqual(0);
  });
});
