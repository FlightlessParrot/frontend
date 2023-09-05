import { Stack, Box } from "@chakra-ui/react"
import { useEffect } from "react"

import PairInput from "./PairInput"
import useControlPairsInput from "../../../hooks/WriteAnswersHooks/useControlPairsInput"

export default function CreatePairs({howMany, setAnswers}) {

    const answers=[]
    const [pairs, dispatchPairs]=useControlPairsInput(howMany)
    useEffect(
        ()=>{
            dispatchPairs({reset: howMany})                 
        },[howMany,dispatchPairs])
    useEffect(
        ()=>{
            
            setAnswers({
                type: 'pairs',
                answers:pairs})
        },[pairs, setAnswers]
    )
    for(let i=0;i<pairs.length;i++)
    {
        answers.push(<PairInput key={i} name={'pair-'+ i} value={pairs[i]} onChange={dispatchPairs} />)
    }
  return (
    <Box>
        <i className="block my-12">Stwórz pary odpowiedzi.</i>
       
    <Stack spacing={'30px'}>
        
        {answers}
    </Stack>

    </Box>
  )
}