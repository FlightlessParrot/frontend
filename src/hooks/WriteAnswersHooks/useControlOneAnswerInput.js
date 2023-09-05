import { useReducer } from "react"

export default function useControlOneAnswerInput(number) {
    
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
     
        if(action?.target?.tagName==='INPUT')
        {
           
            const value=action.target.value
             
            const name=action.target.name
            const key=name.replace('-input','');
            newState[key].answer=value;
        }else{
            Object.entries(newState).forEach(
                ([key, value])=>{
                 
                    newState[key].correct=false
                }
            )
            const key=action.replace('-radio',''); 
            newState[key].correct=true
        }
        return {...state}
    }
    const [state, dispatch]=useReducer(reducer, number, lazyCreator)

  return [state, dispatch]
}