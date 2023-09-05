import { Box, } from "@chakra-ui/react";
import { Outlet, useLoaderData } from "react-router-dom";
import Title from "../../Components/Title";
import { useState } from "react";
import {default as ChooseTeamComponent} from "../../Components/TeacherComponents/ChooseTeam";
import useRedirectToLocation from "../../hooks/useRedirectToLocation";
export default function ChooseTeam() {
    const loaderData=useLoaderData()
    const [value,setValue]=useState()
    useRedirectToLocation('teams/'+value,value)
    const jsx= loaderData.map(
        (e)=>{
            return <option value={e.id} key={e.id}>{e.name}</option>
        }
    )   


  return (
    <Box>
        <Title title='Zarządzaj egzaminami'  />
        <Box  p={[2,4,8,8,16]}>
        <ChooseTeamComponent value={value} onChange={(e)=>setValue(e.target.value)}>
                {jsx}
         </ChooseTeamComponent>
        
        <Outlet /> 
        </Box>
    </Box>
  )
}