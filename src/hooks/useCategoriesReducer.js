import { useReducer } from "react"

export default function useCategoriesReducer(onlyOne, singular) {
    const initValue={
        categories: [],
        undercategories: []
    }
    const reducer=(state, action)=>{
      if(action==='reset')
      {
        return initValue
      }
      if(action?.newState)
      {
        
        return {...action.newState}
      }
        const newState=state
       const key=action.target.name.slice(0,-2)
       const secKey=key==='categories'? 'undercategories':'categories';
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
       if(singular)
       {
        newState[secKey]=[]
       }
       return {...newState}
    }

    const [state, dispatch]=useReducer(reducer,initValue) ;

  return [state,dispatch]
}