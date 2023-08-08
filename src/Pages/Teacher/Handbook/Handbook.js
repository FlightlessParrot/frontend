import Title from "../../../Components/Title";

import { Box, FormControl, FormLabel, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
export default function Handbook() {
  const loaderData = useLoaderData();
  const [value, setValue]=useState('')
  console.log(value)
  const navigate=useNavigate()
  const options= loaderData.map(
    e=><option value={e.id} key={e.id}>{e.name}</option>
    

  )

  useEffect(
    ()=>{
      if(value!=='')
      {
        navigate('team/'+value)
      }
    },[value]
  )
  return (
    <div>
     
      <Title title='Udostępnione materiały' />
      
      <i className="block">Możesz udostępnić własny test członkom zespołu.</i>
     
     <Box  padding={6} marginY={10}>
      <FormControl>
        <FormLabel>Wybierz zespół, któremu udostępnisz materiały.</FormLabel>
        <Select maxW={'500px'} value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Wybierz zespół" name='team'>
          {options}
        </Select></FormControl>
       <Outlet />
       </Box>
    </div>
  )
}