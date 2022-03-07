import { useWeatherData } from "./useWeatherData";
import { Form } from "./Form"
import './App.css';

const App: React.VFC = () => {
  const {
    getWeather,
    weatherData,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    APIchoice,
    setAPIchoice,
  } = useWeatherData();

  return (
    <div className="container">
      <main className="main">
        <h1 className="header" data-testid="header">Pogoda na dziś</h1>
        <Form
          getWeather={getWeather}
          weatherData={weatherData}
          latitude={latitude}
          setLatitude={setLatitude}
          longitude={longitude}
          setLongitude={setLongitude}
          APIchoice={APIchoice}
          setAPIchoice={setAPIchoice}
        />
      </main>
      <footer className="footer">
        <a
          className="footer__link"
          href='https://www.freepik.com/photos/sky'
          target="_blank"
          rel="noreferrer noopener"
        >
          Sky photo created by lifeforstock
        </a>
      </footer>
    </div>
  );
}

export default App;