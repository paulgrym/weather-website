import { BasicWeatherData } from "./interfaces";

export const openweathermapParser = (data: any): BasicWeatherData => {
  return ({
    temperature: data.main.temp,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    sourceUrl: "https://openweathermap.org/",
    sourceName: "Openweathermap",
  })
};

export const weatherbitParser = (data: any): BasicWeatherData => {
  return ({
    temperature: data.data[0].temp,
    humidity: data.data[0].rh,
    pressure: data.data[0].pres,
    sourceUrl: "https://www.weatherbit.io/",
    sourceName: "Weatherbit",
  })
};