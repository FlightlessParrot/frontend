import {
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import React, { useState } from "react";

export const UserData = (props) => {
  const [name, setName] = useState("");
  const [wasNameTouched, touchName] = useState(false);
  const errorName = wasNameTouched && name === "";

  return (
    <FormControl as="div" w={props.w} isInvalid={errorName}>
      <FormLabel>{props.title} </FormLabel>
      <Input
        data-testid="UserData-input"
        required
        maxW={props.width}
        placeholder={props.title}
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={() => touchName(true)}
        project="project"
        name={props.name}
        maxLength={255}
      />
      <FormErrorMessage>Zapomniałeś mnie uzupełnić!</FormErrorMessage>
    </FormControl>
  );
};
