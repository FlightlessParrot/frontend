import { Box, Button, Center } from "@chakra-ui/react";
import { useLoaderData, useRevalidator } from "react-router-dom";
import ChooseTeam from "../../Components/TeacherComponents/ChooseTeam";
import Title from "../../Components/Title";
import { useState } from "react";
import universalFetchSchema from "../../fetch/universalFetchSchema";
import useShowToast from "../../hooks/useShowToast";

export default function DeleteTeam() {
    const loaderData=useLoaderData()
    const [value,setValue]=useState()
    const revalidator=useRevalidator()
    const toast=useShowToast()
    const jsx= loaderData.map(
        (e)=>{
            return <option value={e.id} key={e.id}>{e.name}</option>
        }
    )   

async function removeTeam()
{
    const response=await universalFetchSchema(null,`/teams/${value}/remove`,'delete');
    if(response)
    {
        toast(
            {
                title: 'Usunięto zespół',
                description: 'Udało się usunąć zespół.',
                status: 'success'
            }
        )
    }else{
        toast(
            {
                title: 'Wystąpił błąd',
                description: 'Nie udało się usunąć zespołu.',
                status: 'error'
            }
        )
    }
    revalidator.revalidate()
    setValue(null)
}
  return (
    <Box>
        <Title title='Usuń zespół'  />
        <Box  p={[2,4,8,8,16]}>
        <ChooseTeam value={value} onChange={(e)=>setValue(e.target.value)}>
                {jsx}
         </ChooseTeam>
          {value &&<div className="m-4 sm:m-12  sm:w-80 rounded bg-mediterrianian p-6 shadow-black shadow-lg">
            <b>Zespół: {loaderData.filter(e=>e.id==value)[0].name} </b>
            <strong className="block p-2  bg-red-500 m-6">UWAGA: TA OPERACJA JEST NIEODWRACALNA</strong>
           <Center><Button onClick={removeTeam} colorScheme="red">USUŃ ZESPÓŁ</Button></Center> 
           </div> }
        </Box>
    </Box>
  )
}