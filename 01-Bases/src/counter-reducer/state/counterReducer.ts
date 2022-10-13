import { CounterState } from "../interfaces/interfaces";
import { CounterAction } from "../actions/actions";

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
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