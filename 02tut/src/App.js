import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Lionelo";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to see what I change.
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{{a: 1, b: 2}}</p>
      </header>
      
    </div>
  );
}

export default App;
