import { FormControl, FormErrorMessage, FormLabel, Input, Stack } from "@chakra-ui/react";
import { useState} from "react"
import ImageForm from '../Image/ImageForm'
import PresentImage from '../Image/PresentImage'
export default function WriteQuestion({value, onChange, fileRef}) {
   
    const [check, setCheck]=useState(false)
  return (
    <Stack spacing={'30px'}>
        <FormControl isInvalid={value===''}>
            <FormLabel>Stwórz pytanie</FormLabel>
            <Input name='question' value={value} onChange={onChange} maxLength={250} placeholder="Czy ameba to rodzaj pantofelka?" />
            <FormErrorMessage>Uzupełnij mnie!</FormErrorMessage>
        </FormControl>
        <ImageForm fileRef={fileRef} check={check} setCheck={setCheck} />
        <PresentImage fileRef={fileRef} />
    </Stack>
  )
}