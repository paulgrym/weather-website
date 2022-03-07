import { useWeatherData } from "./useWeatherData";
import { Form } from "./Form"
import './App.css';
import { Result } from "./Result";

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
        {weatherData?.state === "error"
          ? (
            <section>
              <p>
                Ups...coś poszło nie tak. &#128531; <br />
                Sprawdź, czy masz połączenie z internetem. <br />
                Jeśli tak, spróbuj ponownie później.
              </p>
            </section>
          )
          : (weatherData?.state === "success"
            ? <Result basicWeatherData={weatherData?.basicWeatherData} />
            : null
          )
        }
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