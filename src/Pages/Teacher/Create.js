import { Box,  Flex, FormControl, FormLabel, Input, useDisclosure } from "@chakra-ui/react";
import Title from "../../Components/Title";
import { Form, useActionData} from "react-router-dom";
import MyAlert from "../../Components/Alerts/MyAlert";
import { useEffect } from "react";

export default function Create() {
 
    const actionData=useActionData()
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(
        ()=>{
            if(actionData===false)
            {
                onOpen()
            }
        },[actionData, onOpen]
    )
  return (
    <div>
         <MyAlert isOpen={isOpen} onClose={onClose} status='error' title='Coś poszło nie tak' description='Nie udało się utworzyć grupy' />
        <Title title='Stwórz test'></Title>
        <Box p={[4,8]}>
        <Form method='post'>
            <FormControl maxW='1000px' >
                <FormLabel>Nazwa zespołu</FormLabel>
                <Input name='name' placeholder="Wybierz nazwę zespołu" isRequired/>
            </FormControl>
            <Flex justify='end' maxW='1000px'>
            <button className="action-button m-8">
                Utwórz zespół
            </button>
            </Flex>
        </Form></Box>
        </div>
  )
}