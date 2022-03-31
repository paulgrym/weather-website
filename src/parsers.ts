import { BasicWeatherData, isOpenWeatherParser, isWeatherBitParser, Parser } from "./interfaces";

export const openweathermapParser = (response: Parser): BasicWeatherData => {
  if (!isOpenWeatherParser(response)) {
    throw new Error()
  };

  return ({
    temperature: response.main.temp,
    humidity: response.main.humidity,
    pressure: response.main.pressure,
    sourceUrl: "https://openweathermap.org/",
    sourceName: "Openweathermap",
  })
};

export const weatherbitParser = (response: Parser): BasicWeatherData => {
  if (!isWeatherBitParser(response)) {
    throw new Error()
  };

  return ({
    temperature: response.data[0].temp,
    humidity: response.data[0].rh,
    pressure: response.data[0].pres,
    sourceUrl: "https://www.weatherbit.io/",
    sourceName: "Weatherbit",
  })
};