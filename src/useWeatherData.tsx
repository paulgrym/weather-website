import { useState } from "react";
import { BasicWeatherData, WeatherData } from "./interfaces";
import { openweathermapParser, weatherbitParser } from "./parsers";

export const useWeatherData = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [APIchoice, setAPIchoice] = useState("API1");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const APIkey1 = `${process.env.REACT_APP_WEATHER_API_KEY_1}`;
  const APIkey2 = `${process.env.REACT_APP_WEATHER_API_KEY_2}`;

  const APIUrl = [
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey1}&units=metric`,
    `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${APIkey2}`
  ];

  const parseData = (data: any): BasicWeatherData => {
    const PARSERS = [
      openweathermapParser,
      weatherbitParser,
    ];

    let parsedData!: BasicWeatherData;
    PARSERS.find((parser) => {
      try {
        parsedData = parser(data);
        return true;
      } catch (e) {
        return false;
      }
    });

    return parsedData;
  };

  const getWeather = () => {
    setWeatherData({ state: "loading" });
    setTimeout(getWeatherFromAPI, 1000);
  };

  const getWeatherFromAPI = async () => {
    try {
      const response = await fetch(APIchoice === "API1" ? APIUrl[0] : APIUrl[1]);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      const basicWeatherData = parseData(data);

      setWeatherData({
        basicWeatherData,
        APIchoice,
        state: "success"
      });

    } catch (error) {
      console.error("Sth bad happened", error);
      setWeatherData({ state: "error" });
    }
  };

  return {
    getWeather,
    weatherData,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    APIchoice,
    setAPIchoice
  };
};