import { Checkbox, FormControl, Stack, Input, FormErrorMessage } from "@chakra-ui/react";

export default function ManyAnswersInput({name, value, onChange, isChecked}) {
  return (
    <FormControl isInvalid={value===''} >
    <Stack direction='row'> <Checkbox name={name+'-checkbox'} value={true} isChecked={isChecked} onChange={onChange} />
    <Input name={name+'-input'} value={value} onChange={onChange} maxLength={250}/></Stack>
      <FormErrorMessage>Podaj odpowiedź lub usuń pozycję.</FormErrorMessage>
    </ FormControl >
  )
}