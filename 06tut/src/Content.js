import { useState } from 'react'


const Content = () => {
  
/*
  useState usage part
*/
  const [name, setName ] = useState('Lionel');

  const handleNameChange = () => {
    const names = ['Bobe', 'Axel', 'Lionel'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]) 
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
            <p onDoubleClick={handleClick}>
              Hello World {name}!
            </p>
            <button onClick={handleNameChange} >
              Change name
            </button>

            <button onClick={ () => handleClick2('Lionel')} >
              Click it
            </button>

            <button onClick={(e) => handleClick3(e)} >
              Click it
            </button>
        </main>
    )
}

export default Content;
