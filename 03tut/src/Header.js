import logo from './logo.svg';
import './App.css';



const Header = () => {
    //const name = "Lionel";
  const handleNameChange = () => {
    const names = ['Bob', 'Axel', 'Lionel'];
    const int = Math.floor(Math.random() * 3);
    return names[int]
  }

    return (
        <header className="App-header">
            <h1>Groceries List</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World {handleNameChange()}!
        </p>
        
      </header>
        
    )
}



export default Header;