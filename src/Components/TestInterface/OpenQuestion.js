import { FormControl, FormErrorMessage, FormLabel, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function OpenQuestion({isValid, answersController}) {
    const [value, setValue] = useState('')
    const [isTouched, setIsTouched]=useState(false)
    const validation=isTouched && value!==''

    useEffect(
        ()=>{

            answersController(value)
            isValid(validation)
        },[value, isValid, answersController, validation]
    )

  return (
    <FormControl isInvalid={!validation}>
        <FormLabel>Udziel odpowiedzi na powyższe pytanie</FormLabel>
    <Textarea onBlur={e=>setIsTouched(true)} maxLength={60000} value={value} onChange={e=>setValue(e.target.value.trim())}  resize={'vertical'}/>
    <FormErrorMessage>Nie udzieliłeś odpowiedzi na pytanie.</FormErrorMessage>
    </FormControl>
  )
}