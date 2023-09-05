import {  FormControl, Stack, Input, FormErrorMessage } from "@chakra-ui/react";

export default function OrderInput({order, value, onChange, name}) {
  return (
    <Stack direction='row'>
        <FormControl isInvalid={value===''} >
    <Stack direction='row' spacing={'20px'}> <div className="flex justify-center-align-center p-1 rounded-full">{order}</div> 
    <Input name={name} value={value} onChange={onChange} maxLength={250}/></Stack>
      <FormErrorMessage>Podaj odpowiedź lub usuń pozycję.</FormErrorMessage>
    </ FormControl >
    </Stack>
  )
}