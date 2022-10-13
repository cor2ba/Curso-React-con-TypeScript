import { useReducer, useState } from "react"

interface CounterState {
    counter: number;
    previuos: number;
    changes: number;
}

const INITIAL_STATE: CounterState = {
    counter: 0,
    previuos: 0,
    changes: 0,
}

type CounterAction =
    | { type: 'increaseBy', payload: { value: number;} }
    | { type: 'reset' };


const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  const {counter, changes} = state
    switch (action.type) {
        case 'reset':

            return{
                counter:0,
                changes:0,
                previuos:0
            };
        case "increaseBy":
            return{
                counter: changes +1,
                changes: counter + action.payload.value,
                previuos: counter
          }
        default:
            return state;
    }
}

export const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleReset = () => {
      dispatch({type:'reset'})
    }
    const increaseBy = (value:number) => {
      dispatch({type:'increaseBy', payload: {value}})
    }

    return (

        <>

            <h1>CounterReducer:</h1>
            <pre>{JSON.stringify(counterState, null , 2)}</pre>
            <button onClick={handleReset}>

               Reset

            </button>
            <button onClick={()=> increaseBy(1)}>

               +1

            </button>
            <button onClick={()=> increaseBy(5)}>

               +5

            </button>
            <button onClick={()=> increaseBy(10)}>

               +10

            </button>

        </>
    )
}