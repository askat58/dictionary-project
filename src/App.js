import logo from "./logo.png";
import "./App.css";

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
            <img src={logo} className="App-logo img-fluid" alt="logo" />
          </a>
        </header>
        <hr />
        <main>
          <Dictionary defaultKeyword="lost" />
        </main>
        <hr />
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/askat58/dictionary-project"
              target="_blank"
              rel="noreferrer noopener"
            >
              Open-source code available on GitHub.
            </a>{" "}
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/joanna-el%C5%BCbieta-t-288561181/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Joanna Tucka.
            </a>{" "}
            &copy; 2021
          </small>
        </footer>
      </div>
    </div>
  );
}
