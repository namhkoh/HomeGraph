/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
const querystring = require('querystring');
const url = require('url');
const {
  getDevicesForRoom,
  getAllDevices,
  getStatusForComponent,
  getStatusForCapability,
  getLocationDetails,
  getRoomDetails,
} = require('../smartThingsUtils');
const locations = require('./locations');
const roomsMod = require('./rooms');

class Capability {
  constructor({ id, version }) {
    this.id = id;
    this.version = version;
  }
}

class Component {
  constructor({ id, label, capabilities }) {
    this.id = id;
    this.label = label;
    this.capabilities = [];
    capabilities.forEach(capability => {
      this.capabilities.push(new Capability(capability));
    });
  }
}

class Device {
  constructor({
    deviceId,
    name,
    label,
    deviceTypeId,
    deviceTypeName,
    deviceNetworkType,
    roomId,
    locationId,
    components,
  }) {
    this.deviceId = deviceId;
    this.name = name;
    this.label = label;
    this.deviceTypeId = deviceTypeId;
    this.deviceTypeName = deviceTypeName;
    this.deviceNetworkType =
      deviceNetworkType === null ? '' : deviceNetworkType;
    this.locationId = locationId;
    this.roomId = roomId;
    this.components = [];
    components.forEach(component => {
      this.components.push(new Component(component));
    });
  }

  async location() {
    if (this.locationId) {
      const response = await getLocationDetails(this);
      const newLocation = new locations.Location(response);
      return newLocation;
    }

    return null;
  }

  async room() {
    if (this.roomId && this.locationId) {
      const response = await getRoomDetails(this);
      const rooms = new roomsMod.Rooms();
      const newRoom = rooms.roomFor(response);
      return newRoom;
    }
    return null;
  }

  async capabilityStatus({ component, capability }) {
    for (const comp of this.components) {
      if (comp.id === component) {
        const found = comp.capabilities.some(e => e.id === capability);
        if (found) {
          const statusObject = await getStatusForCapability(
            this.deviceId,
            component,
            capability
          );
          return statusObject;
        }
        return null;
      }
    }
  }

  async status(filter) {
    const capabilities = [];
    for (const component of this.components) {
      const statusObject = await getStatusForComponent(
        this.deviceId,
        component
      );
      if (statusObject) {
        for (const property in statusObject) {
          if (property) {
            if (filter.capability && filter.capability !== property) {
              break;
            } else {
              let obj = {};
              obj = Object.assign(obj, statusObject[property]);
              capabilities.push(obj);
            }
          }
        }
      }
    }
    if (capabilities.length === 0) {
      return;
    }
    return capabilities;
  }
}

class DevicesForRoom {
  constructor() {
    this.devices = [];
  }

  async loadDevices({ locationId, roomId }) {
    const devices = await getDevicesForRoom(locationId, roomId);
    devices.forEach(device => {
      const newDevice = new Device(device);
      this.devices.push(newDevice);
    });
  }
}

class DeviceList {
  constructor() {
    this.devices = [];
  }

  async loadDevices(page, max) {
    const devices = await getAllDevices(page, max);
    devices.items.forEach(device => {
      const newDevice = new Device(device);
      this.devices.push(newDevice);
    });
    this.more = !!devices._links.next;
    if (this.more) {
      // Query the page Number
      const parsedUrl = new URL(devices._links.next.href);
      this.nextPage = parsedUrl.searchParams.get('page');
    }
  }

  async devicesOfType(typeId) {
    const allDevices = await getAllDevices();
    const resp = {};
    resp.devices = [];
    allDevices.items.forEach(device => {
      if (device.deviceTypeId === typeId) {
        resp.devices.push(new Device(device));
      }
    });
    resp.more = !!allDevices._links.next;
    if (resp.more) {
      // Query the page Number
      const parsedUrl = new URL(allDevices._links.next.href);
      resp.nextPage = parsedUrl.searchParams.get('page');
    }
    return resp;
  }
}

exports.DevicesForRoom = DevicesForRoom;
exports.Device = Device;
exports.DeviceList = DeviceList;
exports.Capability = Capability;
exports.Component = Component;
