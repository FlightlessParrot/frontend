import {  Outlet,  useLoaderData, useNavigate } from "react-router-dom"
import Title from "../../Components/Title"
import ChooseTeamSelect from "../../Components/Forms/ChooseTeamSelect"
import { useEffect, useState } from "react"
import { Box,} from "@chakra-ui/react"

export default function MakeEgzam() {
    const teams=useLoaderData()
    
    const [team, setTeam]=useState()
    const navigate=useNavigate()

    useEffect(
        ()=>{
            team && navigate('teams/'+team)
        },[team, navigate]
    )
 
  return (
    <Box>
       
   <Title title='Utwórz egzamin'></Title> 
   <Box p={[2, 4, 4, 8, 16]}>
    <ChooseTeamSelect teams={teams} team={team} setTeam={setTeam}/>
    </Box>
    <Box p={8}>
    <Outlet /></Box>
    </ Box>

  )
  }