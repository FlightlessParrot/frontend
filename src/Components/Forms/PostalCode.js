import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react"

export default function PostalCode({wasPostTouched, onChange, onBlur, value, readOnly=false}) {
  return (
     
    <FormControl
    as="div"
    w="150px"
    isInvalid={wasPostTouched && value === ""}
  >
    <FormLabel htmlFor="postalCode">Kod pocztowy</FormLabel>
    <Input
      id="postal_code"
      placeholder="00-000"
      w={"100px"}
      maxLength={6}
      required
      isReadOnly={readOnly}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name="postal_code"
      project="project"
      autoComplete="postal-code"
    />
    <FormErrorMessage role="error">
      Nie zpominaj o kodzie pocztowym!
    </FormErrorMessage>{" "}
  </FormControl>
  )
}