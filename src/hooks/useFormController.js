import { useReducer } from "react";

export default function useFormController(initValue) {
    const reducer=(state, action)=>{
      if(action==='reset')
      {
        return {...initValue}
      }
        const newState=state;
        const name=action.target.name;
        const value=action.target.value;
        newState[name]={
          value: value,
          blur: true
        }
        return {...newState};
      }
      const [state, dispatch]=useReducer(reducer, initValue)
  return  [state, dispatch]
    }