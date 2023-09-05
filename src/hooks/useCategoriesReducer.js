import { useReducer } from "react"

export default function useCategoriesReducer(onlyOne) {
    const initValue={
        categories: [],
        undercategories: []
    }
    const reducer=(state, action)=>{
        const newState=state
       const key=action.target.name.slice(0,-2)
       const value=action.target.value
       if(state[key].includes(value))
       {
        onlyOne? 
        newState[key]=[]
        :newState[key]=newState[key].filter(e=>e!==value)

       }else{
        onlyOne? 
        newState[key]=[value]
        :newState[key].push(value)
       }
       return {...newState}
    }

    const [state, dispatch]=useReducer(reducer,initValue) ;

  return [state,dispatch]
}