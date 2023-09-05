import { FormControl, Input, FormErrorMessage } from "@chakra-ui/react";

export const MyInput = ({name, value, onChange, number}) => (
    <FormControl isInvalid={value[number]===''} >
      <Input name={name+'-'+number} value={value[number]} onChange={onChange} maxLength={100} />
      <FormErrorMessage>Uzupełnij mnie lub usuń pozycję.</FormErrorMessage>
    </FormControl>
  );