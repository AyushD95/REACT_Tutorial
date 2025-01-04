import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    
    if (counter==20) setCounter(20);

    else
    setCounter(counter + 1);
  
    
  };

  const removeValue = () => {

    if(counter<=0) setCounter(0)

    else
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter Value: {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
