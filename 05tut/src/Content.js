
const Content = () => {
  const handleNameChange = () => {
    const names = ['Bob', 'Axel', 'Lionel'];
    const int = Math.floor(Math.random() * 3);
    return names[int]
  }

  const handleClick = () => {
      console.log('You clicked it')
  }

    return (
        <main>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>
            Hello World {handleNameChange()}!
            </p>
            <button onClick={handleClick} >
              Click it
            </button>
        </main>
    )
}

export default Content;
