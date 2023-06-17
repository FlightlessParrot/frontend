import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Message(props) {
  const [values, setValues] = useState({
    title: "",
    message: "",
  });
  
 
  const [inputTouched, setInputTouched] = useState(false);
  const [textareaTouched, setTextareaTouched] = useState(false);

  const errTitle = values.title === "" && inputTouched;
  const errText = values.message === "" && textareaTouched;
  // useEffect(() => {
  //   if (
  //     errTitle === false &&
  //     errText === false &&
  //     values.title !== "" &&
  //     values.message !== ""
  //   ) {
  //     props.setError(false);
  //   } else {
  //     props.setError(true);
  //   }
  // }, [errTitle, errText, values.title, values.message]);
  return (
    <div>
     
      <h2 className="md:ml-9 lead">{props.title}</h2>
      <FormControl isInvalid={errTitle}>
        <FormLabel mt="30px">Tytuł</FormLabel>
        <Input data-testid="message-input"
          required
          onBlur={() => setInputTouched(true)}
          onChange={(e) => setValues((s) => ({ ...s, title: e.target.value }))}
          value={values.title}
          name="title"
          maxW={1000}
          placeholder="Tytuł wiadomości"
        />
        <FormErrorMessage data-testid='errorInputMessage'>Podaj tytuł wiadomości</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errText}>
        <FormLabel mt="30px">Treść</FormLabel>
        <Textarea
        required
          data-testid="message-message"
          onBlur={() => setTextareaTouched(true)}
          onChange={(e) =>
            setValues((s) => ({ ...s, message: e.target.value }))
          }
          name='message'
          value={values.message}
          placeholder="Napisz do nas"
        />
        <FormErrorMessage>Podaj treść wiadomości</FormErrorMessage>
      </FormControl>
    </div>
  );
}
