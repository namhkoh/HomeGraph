/* eslint-disable class-methods-use-this */
const { getLocations, addNewLocation } = require('../smartThingsUtils');
const { Rooms } = require('./rooms');
const { getAirQuality } = require('../climacell/aqi');
const { getFireDangerIndex } = require('../climacell/fire');
const { getWeatherForLocation } = require('../openweather/openweather');
const { getWhatThreeWords } = require('../wtw/getWhatThreeWords');

class Location {
  constructor({
    locationId,
    name,
    countryCode,
    latitude,
    longitude,
    regionRadius,
    temperatureScale,
    timeZoneId,
    locale,
  }) {
    this.locationId = locationId;
    this.name = name;
    this.countryCode = countryCode;
    this.latitude = latitude;
    this.longitude = longitude;
    this.regionRadius = regionRadius;
    this.temperatureScale = temperatureScale;
    this.timeZoneId = timeZoneId;
    this.locale = locale;
  }

  async addLocation(location) {
    const addedLocation = await addNewLocation(location);
    return addedLocation;
  }

  async rooms() {
    const roomsGetter = new Rooms();
    await roomsGetter.loadRooms(this.locationId);
    return roomsGetter.rooms;
  }

  async weather() {
    const weather = await getWeatherForLocation(this);
    return weather;
  }

  async airQuality() {
    const aiq = await getAirQuality(this);
    return aiq;
  }

  async fireHazard() {
    const fireIndex = await getFireDangerIndex(this);
    return fireIndex;
  }

  async whatThreeWords() {
    const response = await getWhatThreeWords(this);
    return response;
  }
}

class Locations {
  constructor() {
    this.locations = [];
  }

  async loadLocations() {
    this.locations = [];
    const locations = await getLocations();
    locations.forEach(location => {
      const newLocation = new Location(location);
      this.locations.push(newLocation);
    });
  }

  async addLocation(location) {
    const addedLocation = await addNewLocation(location);
    return new Location(addedLocation);
  }
}

exports.Locations = Locations;
exports.Location = Location;
