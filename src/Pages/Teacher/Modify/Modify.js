import { Stack } from "@chakra-ui/react";
import Title from "../../../Components/Title";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ChooseTeamSelect from "../../../Components/Forms/ChooseTeamSelect";

export default function Modify() {
    const loaderData = useLoaderData()
    const [teams, setTeams]=useState([])
    const [team,setTeam]=useState()
    const navigate=useNavigate()
    useEffect(
        ()=>{
            if(Array.isArray(loaderData))
            {
                setTeams(loaderData)
            }
        },[loaderData, setTeams]
    )
    useEffect(
        ()=>{
            team && navigate('/user/team/modify/'+team)
        },[team, navigate]
    )
   
  return (
    <div>
    <Title title='Modyfikuj zespół' />
    <Stack padding={[2, 4, 4, 8, 16]} spacing={12}>
    <ChooseTeamSelect   team={team} setTeam={setTeam}   teams={teams} />
    
    <Outlet />
    </Stack>
    </div>
  )
}