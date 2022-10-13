import { useState } from "react";

interface Props {
    value?: Number
}

interface CounterState {
    value:number,
    clicks:number,
}

function CounterBy() {
    const [counter, setCounter] = useState<CounterState>({
        value: 0,
        clicks: 0
    })
    const handleClick = (value:number) => {
        setCounter(prev => ({
            value: prev.value + value,
            clicks: prev.clicks + 1
        }))
    }

    return (
      <div>
        <h1>Counter: {counter.value}</h1>
        <h1>Clicks: {counter.clicks}</h1>
        <button onClick={()=> handleClick(1)}>
            +1
        </button>
        <button onClick={()=> handleClick(5)}>
            +5
        </button>
      </div>
    );
  }
  
  export default CounterBy;