import { Stack, Box } from "@chakra-ui/react"
import { useEffect } from "react"
import useControlManyAnswersInput from "../../../hooks/WriteAnswersHooks/useControlManyAnswersInput"
import ManyAnswersInput from "./ManyAnswersInput"

export default function ManyAnswers({howMany, setAnswers}) {

    const answers=[]
    const [givenAnswers, dispatchGivenAnswers]=useControlManyAnswersInput(howMany)
    useEffect(
        ()=>{
            dispatchGivenAnswers( {reset: howMany}   )                
        },[howMany, dispatchGivenAnswers])
    useEffect(
        ()=>{
            
            setAnswers({
                type: 'many-answers',
                answers: givenAnswers})
        },[givenAnswers, setAnswers]
    )
    for(let i=1;i<=Object.entries(givenAnswers).length;i++)
    {
        answers.push(<ManyAnswersInput key={i} name={'answer-'+ i} onChange={dispatchGivenAnswers} value={givenAnswers['answer-'+i].answer} isChecked={givenAnswers['answer-'+i].correct}/>)
    }
  return (
    <Box>
        <i className="block my-12">Napisz odpowiedzi i zaznacz poprawne odpowiedzi.</i>
       
    <Stack spacing={'30px'}>
        
        {answers}
    </Stack>

    </Box>
  )
}