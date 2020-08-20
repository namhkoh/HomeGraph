const { DeviceList } = require('./devices');

class CapabilityListing {
  constructor({ deviceName, deviceType, roomName, capabilityStatus }) {
    this.deviceName = deviceName;
    this.deviceType = deviceType;
    this.roomName = roomName;
    this.capabilityStatus = capabilityStatus;
  }
}

const getAllDevices = async () => {
  let isMore = true;
  const deviceList = new DeviceList();
  /**
   * Get all the devices
   */
  let page = 0;
  const max = 200;
  do {
    await deviceList.loadDevices(page, max);
    if (deviceList.more) {
      page += 1;
    } else {
      isMore = false;
    }
  } while (isMore);
  return deviceList.devices;
};

const filterByLocation = (devices, locationId) => {
  const devicesInLocation = devices.filter(
    device => device.locationId === locationId
  );
  return devicesInLocation;
};

const getCapability = (devices, component, capability) => {
  /**
   *
   * for each device filter with component id
   */
  const devicesWithComponentId = devices.filter(device => {
    for (let i = 0; i < device.components.length; i += 1) {
      if (device.components[i].id === component) {
        const theComponent = device.components[i];
        for (let j = 0; j < theComponent.capabilities.length; j += 1) {
          if (theComponent.capabilities[j].id === capability) {
            return true;
          }
        }
        return false;
      }
    }
    return false;
  });
  return devicesWithComponentId;
};

const getDevicesWithCapability = async (locationId, component, capability) => {
  const devices = await getAllDevices();
  return getCapability(
    filterByLocation(devices, locationId),
    component,
    capability
  );
};

exports.getDevicesWithCapability = getDevicesWithCapability;
