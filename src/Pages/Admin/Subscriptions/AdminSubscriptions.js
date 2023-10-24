import { Box, FormControl, FormLabel, Select, Stack } from "@chakra-ui/react"
import Title from "../../../Components/Title"
import CreateSubscription from "../../../Components/Subscriptions/CreateSubscription"
import { useEffect } from "react"
import { Outlet, useActionData, useLoaderData, useNavigate } from "react-router-dom"
import useShowToast from "../../../hooks/useShowToast"
import ActivateOrDisactivateSubscriptions from "../../../Components/Subscriptions/ActivateOrDisactivateSubscriptions"
import { useState } from "react"

export default function AdminSubscriptions() {
  const actionData=useActionData();
  const loaderData=useLoaderData();
  const [subscription, setSubscription]=useState('')
  const toast=useShowToast()
  const navigate=useNavigate()
  useEffect(
    ()=>{
      navigate(subscription)
    },[subscription]
  )
  useEffect(
    ()=>{
      if(actionData===true)
      {
        toast(
          {
            title:"Dodano subsckrypcje",
            description: "Dodano subskrypcję.  Dodana subskrypcja jest obecnie nieaktywna.",
            status: 'success'
          }
        )
      }
      if(actionData===false)
      {
        toast(
          {
            title:"Błąd",
            description: "Wystąpił błąd. Subskrypcja nie została dodana",
            status: 'error'
          }
        )
      }

    },[actionData, toast]
  )
  const subscriptions=loaderData.subscriptions.map(e=><option key={e.id} value={e.id}>{e.name}</option>)
  const unactiveSubscriptions=loaderData.unactiveSubscriptions.map(e=><option key={e.id} value={e.id}>{e.name}</option>)
  return (
<Box>
    <Title title='Zarządzaj subskrypcjami' />
    <Stack spacing={'40px'} padding={[2,4,4,8,16]}>
        <CreateSubscription />
        <ActivateOrDisactivateSubscriptions activateComponent />
        <ActivateOrDisactivateSubscriptions />
        
    </Stack>
    <Box marginY='40px' padding={[2,4,4,8,16]}>
      <h2 className="lead block my-16">Modyfikuj subskrypcje</h2>
      <FormControl>
        <FormLabel>Wybierz subskrypcję, którą chcesz modyfikować</FormLabel>
        <Select value={subscription} onChange={e=>setSubscription(e.target.value)} placeholder="Wybierz subskrypcję">
          {subscriptions}
          {unactiveSubscriptions}
        </Select>
      </FormControl>
      <Outlet />
    </Box>
</Box>
  )
}