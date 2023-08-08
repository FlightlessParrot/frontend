import { FormControl, FormLabel, Select, Box } from "@chakra-ui/react";

export default function ChooseTestQuestionsNumber() {
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
              <FormLabel>Ilość pytań</FormLabel>
              <Select name="questionsNumber" placeholder="10" maxW={"150px"}>
                {makeQuestionNumbers()}
              </Select>
            </FormControl>
  )
}