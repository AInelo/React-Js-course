
const Content = () => {
  const handleNameChange = () => {
    const names = ['Bob', 'Axel', 'Lionel'];
    const int = Math.floor(Math.random() * 3);
    return names[int]
  }

  const handleClick = () => {
      console.log('You clicked it')
  }

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`)
  }

  const handleClick3 = (e) => {
    console.log(e.target.innerText)
  }


    return (
        <main>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p onDoubleClick={handleClick}>
              Hello World {handleNameChange()}!
            </p>
            <button onClick={handleClick} >
              Click it
            </button>

            <button onClick={ () => handleClick2('Lionel')} >
              Click it
            </button>

            <button onClick={(e) => handleClick3(e)} >
              Click it test
            </button>
        </main>
    )
}

export default Content;
