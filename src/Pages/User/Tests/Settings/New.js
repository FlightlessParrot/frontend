import {
    Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Form, Link, useActionData} from "react-router-dom";
import TestIcon from "../../../../Components/TestIcon";
import { alertNewTest } from "../../../../Data/alertData";
import SearchTest from "../../../../Components/SearchBars/SearchTest";
import MyAlert from "../../../../Components/Alerts/MyAlert";

export default function New () {
  const [name, setName] = useState("");
  const [nameBlur, touchName] = useState(false);
  const [test, setTest]= useState(null)
  const actionData=useActionData()
  const {isOpen, onOpen, onClose}=useDisclosure()
  const nameError = nameBlur && name === "";
  const alertData=actionData ? alertNewTest.positive: alertNewTest.negative
  useEffect(
    ()=>{
      setName('')
      touchName(false)
      setTest(null)
      window.scroll(0,0)
    },[actionData]
  )
  return (
    <Form className="my-10 " method='post'>
      <MyAlert isOpen={isOpen} onClose={onClose} {...alertData} /> 
      {actionData && <Link className="action-button bg-green-600" to='/user/tests/settings/newest'> Edytuj utworzony test</Link>}
      <FormControl isInvalid={nameError} w='500px'>
        <FormLabel>Nazwa testu</FormLabel>
        <Input
          name="name"
          required
          maxLength={250}
          onChange={(e) => setName(e.target.value)}
          value={name}
          onBlur={touchName}
        />
        <FormErrorMessage>Nazwa jest wymagana.</FormErrorMessage>
      </FormControl>
    
      <div className="m-10 mt-14">
        <b className="bold-serif">Dodaj pakiet do testów</b>
        <i className='block'>
          Jeśli nie dobierzesz pakietu zostanie wygenerowany pusty test.
        </i>
      </div>
      <SearchTest choseTestHandler={setTest} buttonText={'Wybierz'} color='sel'/>
      <Box className="m-12" >
        <p className="sans-serif my-6">Wybrany pakiet:</p>
        <Flex>
          {test!=null &&<> <input readOnly name="test_id" value={test.id} className="hidden" /> <TestIcon {...test} onClick={()=>setTest(null)} /></>}
        </Flex>

      </Box>
      <Flex justifyContent={'right'}>
      <button className=" action-button " onClick={()=>{
      
        onOpen()
      }}>Stwórz test</button>
      </Flex>
    </Form>
  );
}
