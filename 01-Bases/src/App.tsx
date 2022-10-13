import Counter from "./bases/Counter";
import CounterBy from "./bases/CounterBy";
import CounterEffect from "./bases/CounterEffect";
import CounterHook from "./bases/CounterHook";
// import { CounterReducerComponent } from "./bases/CounterReducer";
import { CounterReducerComponent } from "./counter-reducer/CounterReducer";

function App() {
  return (
    <div className="App">
      <h1>HOLA</h1>
      <hr />
      <Counter value={10}/>
      <hr />
      <CounterBy />
      <hr />
      <CounterEffect />
      <hr />
      <CounterHook />
      <hr />
      <CounterReducerComponent />
    </div>
  );
}

export default App;
