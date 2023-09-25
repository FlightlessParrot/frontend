import { RadioGroup, Stack, Box } from "@chakra-ui/react"
import WriteAnswerInput from "./WriteAnswerInput"
import useControlOneAnswerInput from "../../../hooks/WriteAnswersHooks/useControlOneAnswerInput"
import { useEffect } from "react"

export default function OneAnswer({howMany, setAnswers}) {

    
    const [givenAnswers, dispatchGivenAnswers]=useControlOneAnswerInput(howMany)
    useEffect(
        ()=>{
            dispatchGivenAnswers({reset: howMany} )   
            console.log(howMany)             
        },[howMany, dispatchGivenAnswers]
    )
    useEffect(
        ()=>{
           
            setAnswers({
                type: 'one-answer',
                answers: givenAnswers})
        },[givenAnswers, setAnswers]
    )
    const answers=[]
    for(let i=1;i<=Object.entries(givenAnswers).length;i++)
    {
        
        answers.push(<WriteAnswerInput key={i} name={'answer-'+ i} onChange={dispatchGivenAnswers} value={givenAnswers['answer-'+i].answer}/>)
    }
  return (
    <Box>
        <i className="block my-12">Napisz odpowiedzi i zaznacz poprawną odpowiedź.</i>
        <RadioGroup defaultValue={'answer-1-radio'}  name={'true-answer'} onChange={dispatchGivenAnswers}>
    <Stack spacing={'30px'}>
        
        {answers}
    </Stack>
    </RadioGroup >
    </Box>
  )
}