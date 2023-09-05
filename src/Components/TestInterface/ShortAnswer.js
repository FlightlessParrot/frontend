import { FormControl, FormErrorMessage, Input, FormLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function ShortAnswer({isValid, answersController }) {
    const [value,setValue]=useState('');
    const [isTouched, setIsTouched]=useState(false)
    
    useEffect(
       ()=>{ isValid(value!=='')
        answersController(value)
    },[value,answersController, isValid]
    )

  return (
    <FormControl isInvalid={isTouched && value===''}>
         <FormLabel>Udziel odpowiedzi na powyższe pytanie</FormLabel>
        <Input maxLength={250} required value={value} onBlur={e=>setIsTouched(true)} onChange={e=>setValue(e.target.value.trim())} />
        <FormErrorMessage>
            Nie udzieliłeś odpowiedzi na pytanie.
        </FormErrorMessage>
    </FormControl>
  )
}