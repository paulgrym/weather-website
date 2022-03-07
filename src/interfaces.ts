export interface BasicWeatherData {
  temperature: number;
  humidity: number;
  pressure: number;
  sourceUrl: string;
  sourceName: string;
}

export type WeatherData = SuccessWeatherData | ErrorWeatherData;

export interface SuccessWeatherData {
  state: "success";
  APIchoice: string;
  basicWeatherData: BasicWeatherData;
}

export interface ErrorWeatherData {
  state: "error";
}

export interface FormProps {
  getWeather: () => Promise<void>;
  latitude: string;
  setLatitude: React.Dispatch<React.SetStateAction<string>>;
  longitude: string;
  setLongitude: React.Dispatch<React.SetStateAction<string>>;
  APIchoice: string;
  setAPIchoice: React.Dispatch<React.SetStateAction<string>>;
}