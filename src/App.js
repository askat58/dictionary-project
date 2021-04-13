import logo from "./logo.png";
import "./App.css";

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="wine" />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/askat58/dictionary-project"
              target="_blank"
              rel="noreferrer noopener"
            >
              Open sorce code on GitHub.
            </a>{" "}
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/joanna-el%C5%BCbieta-t-288561181/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Joanna Tucka
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
