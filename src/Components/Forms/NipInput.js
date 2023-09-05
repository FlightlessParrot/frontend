import { FormControl, FormLabel, Input } from "@chakra-ui/react"
export default function NipInput({onChange, value,  readOnly=false}) {
  return (
    <FormControl>
    <FormLabel htmlFor="nip">NIP*</FormLabel>
    <Input
      id="nip"
      maxW={"400px"}
      placeholder="000-000-00-00"
      onChange={onChange}
      value={value}
      name="nip"
      project="project"
      maxLength={30}
      isReadOnly={readOnly}
    />{" "}
  </FormControl>
  )
}