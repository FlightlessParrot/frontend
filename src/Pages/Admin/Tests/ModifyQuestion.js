import { Box } from "@chakra-ui/react";
import Title from "../../../Components/Title";
import CreateQuestion from "../../../Components/CreateQuestion/CreateQuestion";

export default function ModifyQuestion() {
  return (
    <div><Title title='Edytuj pytanie' />
    <Box padding={[2, 4, 4, 8, 16]}>
        <CreateQuestion />
    </Box>
    </div>
  )
}