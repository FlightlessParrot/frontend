import {
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel
} from "@chakra-ui/react";
import React, { useState } from "react";

export const UserData = ({w, title, width,  name, readOnly=false, value, onChange, autoComplete}) => {

  const [wasNameTouched, touchName] = useState(false);
  const errorName = wasNameTouched && value === "";

  return (
    <FormControl w={w} isInvalid={errorName}>
      <FormLabel htmlFor={name}>{title} </FormLabel>
      <Input
      autoComplete={autoComplete}
        data-testid="UserData-input"
        id={name}
        required
        isReadOnly={readOnly}
        maxW={width}
        placeholder={title}
        onBlur={() => touchName(true)}
        project="project"
        name={name}
        value={value}
        onChange={onChange}
        maxLength={255}
      />
      <FormErrorMessage>Zapomniałeś mnie uzupełnić!</FormErrorMessage>
    </FormControl>
  );
};
