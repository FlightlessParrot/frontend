import { Checkbox, FormControl, FormLabel,  } from "@chakra-ui/react";
import { useEffect, useReducer } from "react";


export default function ManyAnswers({answers, isValid, answersController}) {
  const [state, dispatch] = useReducer(reducer, answers, init);

  useEffect(
    ()=>{
      answersController(state)
      let valid=false
      for (const [key, value ] of Object.entries(state))
      {
        if(value!==false)
        {
          valid=true
        }
      }
      isValid(valid)
    },[state]
  )
    const answerCheckboxes=  answers.map((e) => {
        return <FormControl key={e.id} display={'flex'} alignItems={'center'} gap='6' marginY='18px'>
           <Checkbox id={e.id}  name="answer" value={e.id} key={e.id} isChecked={state[e.id]} onChange={dispatch} />
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
        newState[action.target.id] = action.target.checked;
        
        return {...newState}
      }
  
    return (
        <>
        {answerCheckboxes}
        </>
  )
    }