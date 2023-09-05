import Title from "../../../Components/Title";

import { Box, FormControl, FormLabel, Select, } from "@chakra-ui/react";
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
    },[value, navigate]
  )
  return (
    <div>
     
      <Title title='Udostępnione materiały' />
      
      <i className="block pl-6">Możesz udostępnić własny test członkom zespołu.</i>
     
     <Box  p={[2, 4, 4, 8, 16]} marginY={10}>
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