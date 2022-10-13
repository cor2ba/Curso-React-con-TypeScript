import { useCounter } from "../hooks/useCounter";

function CounterHook() {
    const {counter, counterElement, handleClick} = useCounter({maxCount: 15})
    return (
      <div>
        <h1 ref={counterElement}>Counter: {counter}</h1>
        <button onClick={handleClick}>
            +1
        </button>
      </div>
    );
  }
  
  export default CounterHook;