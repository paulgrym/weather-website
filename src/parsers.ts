import { BasicWeatherData, OpenweatherParser, WeatherbitParser } from "./interfaces";

export const openweathermapParser = (response: OpenweatherParser): BasicWeatherData => {
  return ({
    temperature: response.main.temp,
    humidity: response.main.humidity,
    pressure: response.main.pressure,
    sourceUrl: "https://openweathermap.org/",
    sourceName: "Openweathermap",
  })
};

export const weatherbitParser = (response: WeatherbitParser): BasicWeatherData => {
  return ({
    temperature: response.data[0].temp,
    humidity: response.data[0].rh,
    pressure: response.data[0].pres,
    sourceUrl: "https://www.weatherbit.io/",
    sourceName: "Weatherbit",
  })
};