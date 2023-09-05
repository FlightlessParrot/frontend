import { FormControl, FormLabel, Radio } from "@chakra-ui/react";
import { useEffect, useReducer, useState } from "react";


export default function OnlyOneAnswer({answers, isValid, answersController}) {
  const [validation, setValidation]=useState(false)
  const [state, dispatch] = useReducer(reducer, answers, init);
 
  useEffect(
    ()=>{
      answersController(state)
      isValid(validation)
    },[state, answersController, isValid, validation]
  )
    const answerRadios =  answers.map((e) => {
        return <FormControl key={e.id}  display={'flex'} alignItems={'center'} gap='6' marginY='18px'>
           <Radio id={e.id}  name="answer" value={e.id} key={e.id} isChecked={state[e.id]} onChange={dispatch} />
           <FormLabel htmlFor={e.id}>{e.answer}</FormLabel>
         </FormControl>
     });

     
     function init(answers) {
        const state = { };
        answers.forEach((answer) => (state[answer.id] = false));
        return { ...state };
      }
      function reducer(state, action) { 
        const newState = {...state};
        for(const id in newState)
        {
            newState[id]=false
        }
        newState[action.target.id] = action.target.checked;
        action.target.checked ? setValidation(true) : setValidation(false)
        
        return {...newState}
      }
  
    return (
        <>
        {answerRadios}
        </>
  )
}