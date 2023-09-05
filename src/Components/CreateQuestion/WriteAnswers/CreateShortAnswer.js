import { Stack, Box, FormControl, Input, FormErrorMessage  } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export default function CreateShortAnswer({setAnswers}) {

    const [value, setvalue]=useState('')
    useEffect(
        ()=>{
            
            setAnswers({
                type: 'short-answer',
                answers:value})
        },[value, setAnswers]
    )
    
  return (
    <Box>
        <i className="block my-12">Podaj odpowiedź</i>
       
    <Stack spacing={'30px'}>
        
    <FormControl isInvalid={value===''} >
    <Stack direction='row'> 
    <Input name={'short-answer'} value={value} onChange={e=>setvalue(e.target.value.trim().toLowerCase())} maxLength={250}/></Stack>
      <FormErrorMessage>Podaj odpowiedź</FormErrorMessage>
    </ FormControl >
    </Stack>

    </Box>
  )
  
}