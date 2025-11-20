import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="Container">

      <Weather/>

      <footer>
        This project was coded by Christine, and is open sourced on {""}
        <a
          className="Git-link"
          href="https://github.com/ChrissyNambz"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
      </div>
    </div>
  );
}

export default App;
