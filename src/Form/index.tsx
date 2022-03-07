import "./style.css";

export const Form = () => {

  return (
    <form className="form">
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
            />
          </label>
        </div>
        <ul className="form__list">
          <li className="form__listItem">
            <label>
              <input
                type="radio"
              />
              &nbsp;openweathermap.org
            </label>
          </li>
          <li className="form__listItem">
            <label>
              <input
                type="radio"
              />
              &nbsp;weatherbit.io
            </label>
          </li>
        </ul>
      </fieldset>
      <button className="form__button">Pokaż pogodę!</button>
    </ form>
  )
};