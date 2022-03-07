import { Form } from "./Form"
import "./App.css"

const App = () => {

  return (
    <div className="container">
      <main className="main">
        <h1 className="header">Pogoda na dziś</h1>
        <Form />
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
