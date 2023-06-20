import { Flex } from "@chakra-ui/react"
import { dummyData } from "../../../../Data/dummyData"
import { TestIconWithButton } from "../../../../Components/TestIcon"
import SearchBar from "../../../../Components/SearchBar"
import { useState } from "react"
import { redirect } from "react-router-dom"
export default function Delete() {
    const loaderData=dummyData
    const [search, setSearch]=useState('')
    const searchData={
        labelText: 'Wyszukaj test',
        value: search,
        onChange: (e)=>setSearch(e.target.value),
        maxWidth: '600px'
    }
  return (
    <form>
        <Flex maxW='1600px' marginTop='40px' alignItems={'end'} gap={10}>
    <SearchBar {...searchData} /><button className="action-button m-0">Szukaj</button>
    </Flex>
    <Flex marginTop={'24px'} gap={6}>
        <TestIconWithButton onClick={()=>console.log('delete')} TestIconDataObject={loaderData.tests[0]} buttonText={'Usuń'} color={'red'}/>
    </Flex>
    </form>
  )
}