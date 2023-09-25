import { Button, Divider, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function UserCard({userModel, getUserIdOnClick, members}) {
  const [isMember, setIsMember]=useState(false)
  const findMember= members.filter(e=>e.id===userModel.id)

  useEffect(
    ()=>{
      if(findMember[0])
      {
        setIsMember(true)
      }else{
        setIsMember(false)
      }
    },[findMember]
  )


  return (
    <Stack  padding={4} spacing={'25px'} width={'250px'} className="border border-white p-2 rounded bold-serif">
        <Text fontSize={'xs'} >Imię i Nazwisko: </Text> <b>{userModel.name}</b>
        <Divider />
        <Text fontSize={'xs'}>Adres email: </Text> <b>{userModel.email}</b>
        <Divider />
        <p>id: <b>{userModel.id}</b> </p>
        <Button colorScheme={isMember ? 'red' :"green"}  onClick={()=>getUserIdOnClick(userModel.id)} variant='outline'>{isMember ?  'Usuń' : 'Wybierz' }</Button>
    </Stack>
  )
}

export const UniversalUserCard=({red, userModel, getUserIdOnClick,buttonText })=>{
  return (
    <Stack  padding={4} spacing={'25px'} width={'250px'} className=" border border-white p-2 rounded bold-serif">
        <Text fontSize={'xs'} >Imię i Nazwisko: </Text> <b>{userModel.name}</b>
        <Divider />
        <Text fontSize={'xs'}>Adres email: </Text> <b>{userModel.email}</b>
        <Divider />
        <p>id: <b>{userModel.id}</b> </p>
        <Button colorScheme={red ? 'red' :"green"}  onClick={()=>getUserIdOnClick(userModel.id)} variant='outline'>{buttonText}</Button>
    </Stack>
  )
}