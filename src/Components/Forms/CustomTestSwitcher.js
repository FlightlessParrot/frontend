import {
  FormControl,
  FormLabel,
  Select,
  Switch,
  useBoolean,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import universalFetchSchema from "../../fetch/universalFetchSchema";

export default function CustomTestSwitcher({onTestSelect, testValue}) {
  const loaderData = useLoaderData();
  const [customTests, setCustomTests] = useBoolean();
  const [testOption, setTestOption] = useState(null);

  const makeTestOptions = (data) => {
    const mapHandler = (element) => {
      return (
        <option value={element.id} key={element.id}>
          {element.name}
        </option>
      );
    };
    const tests = data.map(mapHandler);

    return tests;
  };

  useEffect( () => {
    const fetch=async ()=> {
    const formData = new FormData();
    formData.append("custom", customTests);
    const request= new Request("/", { method: "post", body: formData });
     
    const response=await universalFetchSchema(
      request,
      "/tests/find",
      "post",
      "/login",
      true
    )
   
    Array.isArray(response) && setTestOption(response);
     }
     fetch()
  }, [customTests, setTestOption]);
  const data = Array.isArray(testOption) ? testOption : loaderData;
  
  return (
    <>
      <FormControl display={"flex"} gap="1.2rem" marginY={"1.5rem"}>
        <Switch isChecked={customTests} onChange={setCustomTests.toggle} />
        <FormLabel>Własne testy</FormLabel>
      </FormControl>
      <FormControl>
        <FormLabel>Pakiet</FormLabel>
        <Select required  value={testValue} onChange={onTestSelect}   name="test_id" placeholder="Wybierz pakiet" maxW={"600px"}>
          {makeTestOptions(data)}
        </Select>
      </FormControl>
    </>
  );
}
