const Anything = require('./anything');
const { Locations } = require('./locations');
const { Rooms } = require('./rooms');
const { DeviceList } = require('./devices');
const { getWeatherForLocation } = require('../openweather/openweather');
const { getAirQuality } = require('../climacell/aqi');
const { getStockPrice } = require('../finhub/getStockPrice');
const { getDevicesWithCapability } = require('../graphutils/capabilities');
const {
  actuateDevice,
  deleteLocation,
  createRoom,
  deleteRoom,
  sendCommand,
} = require('../smartThingsUtils');

const getLocationFromIdOrName = (locations, id, nm) => {
  if (id) {
    return locations.find(({ locationId }) => locationId === id);
  }

  if (nm) {
    return locations.find(({ name }) => name === nm);
  }
};

let locations;

module.exports = {
  Anything,
  Query: {
    getLocations: async () => {
      // if (locations && locations.locations && locations.locations.length !== 0)
      //   return locations.locations;
      locations = new Locations();
      await locations.loadLocations();
      return locations.locations;
    },
    getLocation: async (_, inp) => {
      if (
        locations &&
        locations.locations &&
        locations.locations.length !== 0
      ) {
        return getLocationFromIdOrName(
          locations.locations,
          inp.for.locationId,
          inp.for.name
        );
      }

      locations = new Locations();
      await locations.loadLocations();
      return getLocationFromIdOrName(
        locations.locations,
        inp.for.locationId,
        inp.for.name
      );
    },
    getWeather: async (_, { location }) => {
      if (
        !locations ||
        !locations.locations ||
        locations.locations.length === 0
      ) {
        locations = new Locations();
        await locations.loadLocations();
      }
      const theLocation = getLocationFromIdOrName(
        locations.locations,
        location.locationId,
        location.name
      );
      return getWeatherForLocation({
        longitude: theLocation.longitude,
        latitude: theLocation.latitude,
      });
    },
    getAirQuality: async (_, { location }) => {
      if (
        !locations ||
        !locations.locations ||
        locations.locations.length === 0
      ) {
        locations = new Locations();
        await locations.loadLocations();
      }
      const theLocation = getLocationFromIdOrName(
        locations.locations,
        location.locationId,
        location.name
      );
      return getAirQuality({
        longitude: theLocation.longitude,
        latitude: theLocation.latitude,
      });
    },
    getRoom: async (_, inp) => {
      if (
        !locations ||
        !locations.locations ||
        locations.locations.length === 0
      ) {
        locations = new Locations();
        await locations.loadLocations();
      }
      const location = getLocationFromIdOrName(
        locations.locations,
        inp.for.location.locationId,
        inp.for.location.name
      );
      const rooms = new Rooms();
      await rooms.loadRooms(location.locationId);
      if (inp.for.roomId) {
        return rooms.rooms.find(({ roomId }) => roomId === inp.for.roomId);
      }

      if (inp.for.name) {
        return rooms.rooms.find(({ name }) => name === inp.for.name);
      }
    },
    getAllDevices: async (_, input) => {
      const { page, max } = input;
      const devices = new DeviceList();
      await devices.loadDevices(page, max);
      return devices;
    },
    getAllDevicesOfType: async (_, arg) => {
      const devices = new DeviceList();
      const resp = await devices.devicesOfType(arg.typeId);
      return resp;
    },
    getStockPrice: async (_, ticker) => {
      const stockPrice = await getStockPrice(ticker.input.ticker);
      return stockPrice;
    },
    getDevicesWithCapability: async (_, input) => {
      const { locationId, component, capability } = input;
      return getDevicesWithCapability(locationId, component, capability);
    },
  },

  Mutation: {
    actuateDevice: async (_, args) =>
      actuateDevice(args.input.deviceName, args.input.command),
    deleteLocation: async (_, inp) => {
      if (
        !locations ||
        !locations.locations ||
        locations.locations.length === 0
      ) {
        locations = new Locations();
        await locations.loadLocations();
      }
      const location = getLocationFromIdOrName(
        locations.locations,
        inp.for.locationId,
        inp.for.name
      );
      locations = undefined;
      if (location) {
        return deleteLocation(location);
      }
      return null;
    },
    addNewLocation: async (_, location) => {
      if (location.locationId) {
        // Guard Just in case the user trys to set locationId
        delete location.locationId;
      }
      const currentLocations = new Locations();
      const addedLoc = await currentLocations.addLocation(location);
      locations = undefined;
      return addedLoc;
    },
    createRoom: async (_, args) => {
      const { roomName } = args.input;
      const { location } = args.input;
      if (
        !locations ||
        !locations.locations ||
        locations.locations.length === 0
      ) {
        locations = new Locations();
        await locations.loadLocations();
      }
      const forLocation = getLocationFromIdOrName(
        locations.locations,
        location.locationId,
        location.name
      );
      const roomProto = await createRoom(roomName, forLocation.locationId);
      const rooms = new Rooms();
      return rooms.roomFor(roomProto);
    },
    deleteRoom: async (_, args) => {
      const { roomName } = args.input;
      const { location } = args.input;
      if (
        !locations ||
        locations.locations ||
        locations.locations.length === 0
      ) {
        locations = new Locations();
        await locations.loadLocations();
      }
      const forLocation = getLocationFromIdOrName(
        locations.locations,
        location.locationId,
        location.name
      );
      const rooms = new Rooms();
      await rooms.loadRooms(forLocation.locationId);
      const roomId = rooms.roomIdFor(roomName);
      if (roomId === null) return null;

      return deleteRoom(roomId, forLocation.locationId);
    },
    sendCommand: async (_, commands) =>
      sendCommand(
        commands.input.deviceId,
        commands.input.component,
        commands.input.capability,
        commands.input.command,
        commands.input.args
      ),
  },
};
