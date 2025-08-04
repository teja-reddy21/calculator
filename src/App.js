


import { useState } from 'react';
import './app.css'
import Keypad from './component/Keypad';

function App() {

  const [input,setInput]=useState("")

  function handleClick(value){
     setInput(input+value)
  }
  function calculate(){
    const outputVal= eval(input) // to evaluate all 
    setInput(outputVal)
  }
 function handleClear(){
      setInput("")
 }
  return (
    <div className="container">
     <h1>Calculator App using react</h1>
     <div className='calculator'>
      <input type="text" className='output' value={input}/>
     </div>
  <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}/>

    </div>
  );
}

export default App;
