import Square from "./Square";
import Input from "./Input";
import { useState } from "react";

function App() {
  const [colorValue1, setColorValue1] = useState("");
  const [colorValue2, setColorValue2] = useState("");

  const [hexValue1,setHexValue1] = useState("");
  const [hexValue2,setHexValue2] = useState("");

  const [isDarkText1, setIsDarkText1] = useState(true)
  const [isDarkText2, setIsDarkText2] = useState(true)


  return (
    <div className="Container">
      <div className="App" >
        <Square 
          colorValue={colorValue1}
          hexValue = {hexValue1}  
          isDarkText={isDarkText1}
          />
        <Input 
          colorValue={colorValue1} 
          setColorValue={setColorValue1}
          setHexValue={setHexValue1} 
          isDarkText={isDarkText1}
          setIsDarkText={setIsDarkText1}
          />
      </div>


      <div className="App">
        <Square  
          colorValue={colorValue2}
          hexValue={hexValue2} 
          isDarkText={isDarkText2}

          />
        <Input 
          colorValue={colorValue2} 
          setColorValue={setColorValue2}
          setHexValue={setHexValue2} 
          isDarkText={isDarkText2}
          setIsDarkText={setIsDarkText2}
          />
      </div>
    </div>
  );
}

export default App;
