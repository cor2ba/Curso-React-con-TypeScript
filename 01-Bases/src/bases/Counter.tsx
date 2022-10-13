import { useState } from "react";

function Counter({value = 0}) {
    const [counter, setCounter] = useState(value)
    const handleClick = () => {
        setCounter(prev => prev + 1)
    }
    return (
      <div>
        <h1>Counter: {counter}</h1>
        <button onClick={handleClick}>
            +1
        </button>
      </div>
    );
  }
  
  export default Counter;