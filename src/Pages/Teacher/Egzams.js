import { Outlet, useLoaderData, useRevalidator } from "react-router-dom"
import TestIcon, { TestIconWithButton } from "../../Components/TestIcon";
import useStartEgzam from "../../hooks/useStartEgzam"
import { Box, FormControl, FormLabel, Select, Wrap, useToast } from "@chakra-ui/react";
import useRedirectToLocation from "../../hooks/useRedirectToLocation";
import { useEffect, useState } from "react";
import useShowToast from "../../hooks/useShowToast";

export default function Egzams() {
  const [testId, setTestId]=useState()
  const [started, setStarted]=useState(null)
  const loaderData=useLoaderData();
  const startEgzam=useStartEgzam();
  const revalidator=useRevalidator()
  const toast=useShowToast()
  useRedirectToLocation('egzams/'+testId, testId)
  useEffect(
    ()=>{
      if(started)
      {
        toast(
          {
            title: 'Egzamin się rozpoczął',
            description: 'Udało się rozpocząć egzamin.',
            status: 'success'
          }
        )
        setStarted(null)
        revalidator.revalidate()
      }
      if(started===false)
      {
        toast(
          {
            title: 'Wystąpił błąd',
            description: 'Nie udało się rozpocząć egzaminu.',
            status: 'error'
          }
        )
        setStarted(null)
      }
    },[started, revalidator]
  )
  console.log(loaderData.egzams)
  const notRunningEgzams=loaderData.egzams.filter(
    (e)=>e.fillable===0
  )

  const runningEgzams=loaderData.egzams.filter(
    (e)=>e.fillable===1 
  )
  const jsxEgzam=notRunningEgzams.map((e)=>{
    return <TestIconWithButton key={e.id} TestIconDataObject={e} buttonText={'START'} color='green' onClick={()=>startEgzam(e.id,setStarted)} />
  })

  const jsxRunningEgzams=runningEgzams.map((e)=>{
    return <option  value={e.id} key={e.id}>{e.name}</option>
  })
  return (
    <Box marginY={[16,16,32]}>
     {notRunningEgzams.length>0 &&<Box marginTop={[8, 16, 16, 32]}>
      <h2 className="lead">Rozpocznij przygotowany egzamin</h2>
      <Wrap spacing={25} marginY={[2,4,4,8,16]}>
        
        {jsxEgzam}
      </Wrap>
      </Box>}
      <FormControl>
        <FormLabel>Wybierz egzamin, żeby zobaczyć wyniki</FormLabel>
      <Select placeholder='Wybierz egzamin' value={testId} onChange={(e)=>setTestId(e.target.value)}>
      {jsxRunningEgzams}
      </Select>
      </FormControl>
      <Outlet />
    </Box>
  )
}