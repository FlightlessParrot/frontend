import { useEffect, useState } from "react";
import universalFetchSchema from "../../fetch/universalFetchSchema";
import SearchBar from "./SearchBar";
import { Flex, Wrap } from "@chakra-ui/react";
import { TestIconWithButton } from "../TestIcon";
export default function SearchTest({choseTestHandler, buttonText, color, custom=false,egzam=false}) {
  const [search, setSearch] = useState('');
  const [tests, setTests] = useState([]);
  const searchData = {
    labelText: "Wyszukaj pakiet",
    value: search,
    onChange: (e) => setSearch(e.target.value),
    maxWidth: "600px",
  };
  console.log(tests)
  const testsIcons = tests.map(
    (e)=><TestIconWithButton key={e.id} 
    TestIconDataObject=
    {{name: e.name,
      id: e.id,
      path: e.path
     }} 
     onClick={(event)=>{event.preventDefault(); choseTestHandler(e); setSearch(''); setTests([])}} 
     buttonText={buttonText}
     color={color} />
  );
     useEffect(
      ()=>{
        findTests()
      },[]
     )
  function clickHandler(e)
  {
    e.preventDefault()
    findTests()

  }
  function findTests() {

    const fn=async ()=>{const formData = new FormData();
    formData.append('search', search)
    formData.append('custom', custom)
    const url=egzam ? "/egzams/find":"/tests/find"
    const request = new Request("/", {method:'post', body: formData });
    const response = await universalFetchSchema(
      request,
      url,
      "post",
      "/login",
      true
    );
    if (Array.isArray(response)) {
      setTests(response);
    }}
    fn()
  }


  return (
    <div>
      <Flex maxW="1600px" marginTop="40px" alignItems={"end"} gap={10}>
        <SearchBar {...searchData} onClick={clickHandler} />
        <button className="action-button m-0" onClick={clickHandler}>Szukaj</button>
      </Flex>
      <Wrap marginTop={"24px"} gap={6}>
        {testsIcons}
      </Wrap>
    </div>
  );
}
