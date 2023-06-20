
import { dummyData } from "../../../../Data/dummyData"
import { TestIconWithButton } from "../../../../Components/TestIcon"
import { useState } from "react"
import SearchTest from "../../../../Components/SearchBars/SearchTest"

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
    <SearchTest search={search} setSearch={setSearch}>
        <TestIconWithButton onClick={()=>console.log('delete')} TestIconDataObject={loaderData.tests[0]} buttonText={'Usuń'} color={'red'}/>
    </SearchTest>
  )
}