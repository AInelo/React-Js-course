import { useState } from 'react'


const Content = () => {
/*
  This is useState usage part
  name : is like the getter of name
  setName : is like the setter of name value 
*/
  const [name, setName ] = useState('Lionel');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['Bobe', 'Axel', 'Lionel'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]) 
    return names[int]
  }

  const handleClick = () => {
    // Is not an incrementation 
    setCount(count + 1);
    setCount(count + 1);    
    console.log('By applying the methode UseState setCount : ' + count)
  }

  const handleClick2 = (name) => {
    console.log('The Current State of count is : ' + count)
  }

  // const handleClick3 = (e) => {
  //   console.log(e.target.innerText)
  // }


    return (
        <main>
            <p onDoubleClick={handleClick}>
              Hello {name} and count is {count}!
            </p>
            
            <button onClick={handleNameChange} >
              Change name
            </button>

            <button onClick={handleClick} >
              Click it to Count UseState
            </button>

            <button onClick={handleClick2} >
              Click it
            </button>
        </main>
    )
}

export default Content;
