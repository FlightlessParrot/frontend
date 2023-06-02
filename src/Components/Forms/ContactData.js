import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
export default function ContactData() {
  const [fields, setFields] = useState({
    sirOrLady: "",
    mail: "",
  });

  return (
    <>
    <h2 className="md:ml-9 lead m-10 mt-16">Dane kontaktowe</h2>
    <div className=" flex flex-wrap flex-col mb-16">
      <FormControl>
      <FormLabel>Tytuł*</FormLabel>
      <Select
        maxW="300px"
        size="md"
        placeholder="Inny"
        value={fields.sirOrLady}
        onChange={(e) => setFields((s) => ({ ...s, sirOrLady: e.target.value }))}
      >
      
        <option value="Pan">Pan</option>
        <option value="Pani">Pani</option>
      </Select></FormControl>
      <FormControl>
      <FormLabel mt="20px">e-mail*</FormLabel>
      <Input
      
        placeholder="mail@domena.pl"
        maxW="500px"
        type="email"
        name="mail"
        value={fields.mail}
        onChange={(e) => setFields((s) => ({ ...s, mail: e.target.value }))}
      /></FormControl>
    </div></>
  );
}
