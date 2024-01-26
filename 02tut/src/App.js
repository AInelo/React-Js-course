import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Lionel";
  const handleNameChange = () => {
    const names = ['Bob', 'Axel', 'Lionel'];
    const int = Math.floor(Math.random() * 3);
    return names[int]
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World {handleNameChange()}!
        </p>
        
      </header>
      
    </div>
  );
}

export default App;
