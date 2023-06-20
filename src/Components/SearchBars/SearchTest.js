import SearchBar from "./SearchBar"
import { Flex } from "@chakra-ui/react";
export default function SearchTest({children, search,setSearch})
{

    const searchData={
        labelText: 'Wyszukaj test',
        value: search,
        onChange: (e)=>setSearch(e.target.value),
        maxWidth: '600px'
    }
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <Flex maxW='1600px' marginTop='40px' alignItems={'end'} gap={10}>
    <SearchBar {...searchData} /><button className="action-button m-0">Szukaj</button>
    </Flex>
    <Flex marginTop={'24px'} gap={6}>
      {children}
    </Flex>
    </form>
  )
}