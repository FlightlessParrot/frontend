import { FormControl, FormLabel, Select, Stack } from "@chakra-ui/react";
import Title from "../../../Components/Title";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
        },[loaderData]
    )
    useEffect(
        ()=>{
            team && navigate('/user/team/modify/'+team)
        },[team]
    )
    const options=teams.map(
        (e)=><option key={e.id} value={e.id}> {e.name}</option>
    )
  return (
    <div>
    <Title title='Modyfikuj zespół' />
    <Stack padding={[4,8]} spacing={12}>
    <FormControl>
    <FormLabel>Wybierz zespół</FormLabel>
    <Select placeholder="Wybierz zespół" value={team} onChange={e=>setTeam(e.target.value)}>
        {options}
    </Select>
    </FormControl>
    <Outlet />
    </Stack>
    </div>
  )
}