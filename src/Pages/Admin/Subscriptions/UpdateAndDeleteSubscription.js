
import { Button, Stack, Center } from "@chakra-ui/react";
import EditSubscription from "../../../Components/Subscriptions/EditSubscription";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import universalFetchSchema from "../../../fetch/universalFetchSchema";
import useShowToast from "../../../hooks/useShowToast";

export default function UpdateAndDeleteSubscription() {
  const loaderData=useLoaderData()
  const {subscription}=useParams()
  const navigate=useNavigate()
  const toast=useShowToast()
  const clickHandler=async ()=>{
    const response=await universalFetchSchema(null,'/subscription/'+subscription+'/delete','delete')
    if(response)
    {
      toast({
        title:'Usunięto subskrypcję',
        status: 'success'
      })
    }else{
      toast({
        title:'Nie udało się usunąć subskrypcji',
        status: 'error'
      })
    }
    navigate('../')
  }
  return (
    <Stack> 
        <h3 className="lead text-xl my-12 mt-16">Modyfikujesz subskrypcję: {loaderData.subscription.name}</h3>
        <EditSubscription/>
        <Center><Button colorScheme="red" onClick={clickHandler}>Usuń subskrypcję</Button></Center>
  </Stack>
  )
}