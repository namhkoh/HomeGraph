const fetch = require('node-fetch');

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}

const API_KEY = 'c63a150e94dd44d9136cde33de8bedbe';

class Weather {
  constructor({
    timestamp,
    location,
    condition,
    description,
    temperature,
    pressure,
    humidity,
    wind_speed,
    wind_direction,
    cloud_cover,
    rain_volume,
    snow_volume,
  }) {
    this.timestamp = timestamp;
    this.location = location;
    this.condition = condition;
    this.description = description;
    this.temperature = temperature;
    this.pressure = pressure;
    this.humidity = humidity;
    this.wind_speed = wind_speed;
    this.wind_direction = wind_direction;
    this.cloud_cover = cloud_cover;
    this.rain_volume = rain_volume;
    this.snow_volume = snow_volume;
  }
}

const getWeatherForLocation = async ({ latitude, longitude }) => {
  if (!latitude || !longitude) {
    return null;
  }
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`
  );

  const responseObj = await response.json();
  return new Weather({
    timestamp: responseObj.dt,
    location: responseObj.name,
    condition: responseObj.weather[0].id,
    description: responseObj.weather[0].description,
    temperature: responseObj.main.temp,
    humidity: responseObj.main.humidity,
    pressure: responseObj.main.pressure,
    wind_speed: responseObj.wind.speed,
    wind_direction: responseObj.wind.deg,
    cloud_cover: responseObj.clouds.all,
    rain_volume:
      !responseObj || !responseObj.rain || !responseObj.rain['3h']
        ? 0
        : responseObj.rain['3h'],
    snow_volume:
      !responseObj || !responseObj.snow || !responseObj.snow['3h']
        ? 0
        : responseObj.snow['3h'],
  });
};

exports.getWeatherForLocation = getWeatherForLocation;
exports.Weather = Weather;
