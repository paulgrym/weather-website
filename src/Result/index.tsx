import { BasicWeatherData } from "../interfaces";
import "./style.css";

interface ResultProps {
  basicWeatherData: BasicWeatherData
}

export const Result: React.VFC<ResultProps> = ({ basicWeatherData }) => {

  return (
    <section data-testid="resultSection">
      <p>
        Temperatura: {basicWeatherData.temperature.toFixed(1)} &deg;C
      </p>
      <p>
        Wilgotność: {basicWeatherData.humidity.toFixed(0)} %
      </p>
      <p>
        Ciśnienie: {basicWeatherData.pressure.toFixed(0)} hPa
      </p>
      <p>
        Dane pochodzą z: {
          <a
            className="result__link"
            href={basicWeatherData.sourceUrl}
            target="_blank"
            rel="noreferrer noopener"
            data-testid="resultLink"
          >
            {basicWeatherData.sourceName}
          </a>
        }
      </p>
    </ section >
  )
};