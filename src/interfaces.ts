export interface BasicWeatherData {
  temperature: number;
  humidity: number;
  pressure: number;
  sourceUrl: string;
  sourceName: string;
}

export type WeatherData = SuccessWeatherData | ErrorWeatherData | LoadingWeatherData;

export interface LoadingWeatherData {
  state: "loading";
}

export interface SuccessWeatherData {
  state: "success";
  APIchoice: string;
  basicWeatherData: BasicWeatherData;
}

export interface ErrorWeatherData {
  state: "error";
}

export interface FormProps {
  getWeather: () => void;
  latitude: string;
  setLatitude: React.Dispatch<React.SetStateAction<string>>;
  longitude: string;
  setLongitude: React.Dispatch<React.SetStateAction<string>>;
  APIchoice: string;
  setAPIchoice: React.Dispatch<React.SetStateAction<string>>;
}


export type Parser = OpenweatherParser | WeatherbitParser;

export interface OpenweatherParser {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  }
}

export interface WeatherbitParser {
  data: [{
    temp: number;
    rh: number;
    pres: number;
  }]
}
