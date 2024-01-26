// import logo from './logo.svg';
import './App.css';

const Content = () => {
     //const name = "Lionel";
  const handleNameChange = () => {
    const names = ['Bob', 'Axel', 'Lionel'];
    const int = Math.floor(Math.random() * 3);
    return names[int]
  }
    return (
        <main>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>
            Hello World {handleNameChange()}!
            </p>
        </main>
    )
}

export default Content;