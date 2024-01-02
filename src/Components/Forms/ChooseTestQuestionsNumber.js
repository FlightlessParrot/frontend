import { FormControl, FormLabel, Select, Box } from "@chakra-ui/react";

export default function ChooseTestQuestionsNumber({label='Ilość pytań', name="questionsNumber" }) {
    const makeQuestionNumbers = () => {
        const y = [];
        for (let x = 20; x <= 150; x += 10) {
          y.push(
            <option data-testid='CreateTestInstance_optionNumber' value={x} key={x}>
              {x}
            </option>
          );
        }
        return y;
    }
  return (
    <FormControl as={Box} maxW="fit-content">
              <FormLabel>{label}</FormLabel>
              <Select name={name} placeholder="10" maxW={"150px"}>
                {makeQuestionNumbers()}
                <option data-testid='CreateTestInstance_optionNumber' value={1000} key={'all'}>
              Wszystkie
            </option>
              </Select>
            </FormControl>
  )
}