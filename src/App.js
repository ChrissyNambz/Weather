import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Everyone!!!</p>

        <a
          className="Git-link"
          href="https://github.com/ChrissyNambz"
          target="_blank"
          rel="noreferrer"
        >
          My GitHub Repository
        </a>
      </header>
    </div>
  );
}

export default App;
