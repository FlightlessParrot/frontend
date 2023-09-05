import { Radio, Stack, Input, FormControl, FormErrorMessage } from "@chakra-ui/react";

export default function WriteAnswerInput({name, value, onChange}) {
  return (
    <FormControl isInvalid={value===''} >
  <Stack direction='row'> <Radio  value={name+'-radio'} /><Input name={name+'-input'} value={value} onChange={onChange} maxLength={250}/></Stack>
    <FormErrorMessage>Podaj odpowiedź lub usuń pozycję.</FormErrorMessage>
  </ FormControl >
  )
}