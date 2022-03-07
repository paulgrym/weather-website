import { FormProps } from "../interfaces";
import "./style.css";

export const Form: React.VFC<FormProps> = ({
  getWeather,
  weatherData,
  latitude,
  setLatitude,
  longitude,
  setLongitude,
  APIchoice,
  setAPIchoice
}) => {

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getWeather();
  };

  const onLatitudeChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => setLatitude(target.value);
  const onLongitudeChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => setLongitude(target.value);

  console.log(weatherData);

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <div className="form__container">
          <label className="form__label">
            <span className="form__labelText">Szerokość geograficzna:</span>
            <input
              className="form__input"
              placeholder="Szerokość w stopniach"
              type="number"
              min="-90"
              max="90"
              step="0.01"
              required
              value={latitude}
              onChange={onLatitudeChange}
              data-testid="latitudeInput"
            />
          </label>
          <label className="form__label">
            <span className="form__labelText">Długość geograficzna:</span>
            <input
              className="form__input"
              placeholder="Długość w stopniach"
              type="number"
              min="-180"
              max="180"
              step="0.01"
              required
              value={longitude}
              onChange={onLongitudeChange}
              data-testid="longitudeInput"
            />
          </label>
        </div>
      </fieldset>
      <fieldset className="form__fieldset">
        <legend className="form__radioButtonsListTitle">Źródło danych:</legend>
        <ul className="form__radioButtonsList" data-testid="radioButtonsList">
          <li className="form__radioButtonsListItem">
            <label>
              <input
                type="radio"
                checked={"API1" === APIchoice}
                onChange={() => { setAPIchoice("API1") }}
                value={"API1"}
                data-testid="API1Input"
              />
              &nbsp;openweathermap.org
            </label>
          </li>
          <li className="form__listItem">
            <label>
              <input
                type="radio"
                checked={"API2" === APIchoice}
                onChange={() => { setAPIchoice("API2") }}
                value={"API2"}
                data-testid="API2Input"
              />
              &nbsp;weatherbit.io
            </label>
          </li>
        </ul>
      </fieldset>
      <button className="form__button" data-testid="submit">Pokaż pogodę!</button>
    </ form>
  )
};