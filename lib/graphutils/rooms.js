/* eslint-disable class-methods-use-this */
const { getRooms } = require('../smartThingsUtils');
const { DevicesForRoom } = require('../graphutils/devices');
const { Stock, getStockPrice } = require('../finhub/getStockPrice');

class Room {
  constructor({ roomId, locationId, name }) {
    this.roomId = roomId;
    this.locationId = locationId;
    this.name = name;
  }

  async devices() {
    const devicesGetter = new DevicesForRoom();
    await devicesGetter.loadDevices(this);
    return devicesGetter.devices;
  }
}
class STRoom extends Room {
  get __typename() {
    return 'STRoom';
  }
}

class Office extends Room {
  get __typename() {
    return 'Office';
  }

  async stock(ticker) {
    const stockPrice = await getStockPrice(ticker.ticker);
    return stockPrice;
  }
}

class Rooms {
  constructor() {
    this.rooms = [];
  }

  // Is this method required in both classes?
  async stock(ticker) {
    const stockPrice = await getStockPrice(ticker.ticker);
    return stockPrice;
  }

  async loadRooms(locationId) {
    const rooms = await getRooms(locationId);
    rooms.forEach(room => {
      const newRoom = this.roomFor(room);
      if (newRoom) {
        this.rooms.push(newRoom);
      }
    });
  }

  roomIdFor(name) {
    for (let i = 0; i < this.rooms.length; i += 1) {
      const thisRoom = this.rooms[i];
      if (thisRoom.name === name) {
        return thisRoom.roomId;
      }
    }
    console.log(`Returning this null`);
    return null;
  }

  roomFor(roomInfo) {
    let room = null;

    if (roomInfo.name.toLowerCase() === 'office') {
      room = new Office(roomInfo);
    } else {
      room = new STRoom(roomInfo);
    }
    return room;
  }
}

exports.Rooms = Rooms;
exports.Room = Room;
