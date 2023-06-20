import {
    Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import TestIcon from "../../../../Components/TestIcon";
import { dummyData } from "../../../../Data/dummyData";

export default function () {
  const [name, setName] = useState("");
  const [nameBlur, touchName] = useState(false);
  const nameError = nameBlur && name === "";
    const loaderData=dummyData

    const makeTestIcons=loaderData.tests.map((e)=><TestIcon {...e}  />)
  return (
    <Form className="my-10 ">
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
          Jeśli nie dobierzesz pakietów zostanie wygenerowany pusty test.
        </i>
      </div>
      <Flex gap='6' className="m-10">
        <FormControl>
          <FormLabel>Pakiet</FormLabel>
          <Select></Select>
        </FormControl>
        <button className="action-button">
            Dodaj
        </button>
      </Flex>
      <Box className="m-12" >
        <p className="sans-serif my-6">Dodane pakiety:</p>
        <Flex>
            {makeTestIcons}
        </Flex>

      </Box>
      <Flex justifyContent={'right'}>
      <button className=" action-button ">Stwórz test</button>
      </Flex>
    </Form>
  );
}
