import { Button, FormControl,  FormLabel, Stack, Textarea } from "@chakra-ui/react";

export default function GiveExplanation({value, onChange, closeFn}) {
  return (
    <FormControl >
      <Stack spacing={'30px'} justify={'start'}>
        <div><Button colorScheme="red" onClick={closeFn}>Nie chcę wyjaśniać</Button></div>
        <FormLabel>(opcjonalnie) Wyjaśnij użytkownikowi dlaczego odpowiedź jest poprawna.</FormLabel>
        <Textarea maxLength={1000} value={value} onChange={onChange} />
      </Stack>
    </FormControl>
  )
}