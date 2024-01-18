import './App.css';
import useSqaure from './useSquare'
import React, {useEffect, useState} from 'react';


 const App = React.memo(() => {
  const [input , setInput ] = useState(0);
  const {loading, squareValue, number} = useSqaure(input) 
 
  const handleChange = (e) => {
    setInput(e.target.value)  
  }
  const multiplyValue = ()=> {
    squareValue(input)
  }

  return (
    <div className="App">
      <input type='text' value={input || ""} onBlur={multiplyValue} onChange={handleChange}/>
      {
        loading ? (
          <span>Calculatting </span>
        ):(
          <span>
            {number}
          </span>
        )
      }

    </div>
  );
})

export default App;
