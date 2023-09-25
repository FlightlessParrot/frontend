import { useReducer } from "react"

export default function useControlManyAnswersInput(number) {
    
    const lazyCreator=(number)=>{
   
        const state={}
        for(let i=1;i<=number;i++)
        {
            state['answer-'+i]={
                answer: '',
                correct: false
            }
        }
    
        return {...state}
    }
    const reducer=(state, action)=>{
        if(action?.reset)
        {
            const initialState=lazyCreator(action.reset)
            return {...initialState}
        }
        const newState=state
        const value=action.target.value
            const name=action.target.name
 
        if(action.target.type==='text')
        {
            const key=name.replace('-input','');
            newState[key].answer=value;
        }else{
         
            const key=name.replace('-checkbox',''); 
            newState[key].correct=action.target.checked
        }
        return {...state}
    }
    const [state, dispatch]=useReducer(reducer, number, lazyCreator)

  return [state, dispatch]
}