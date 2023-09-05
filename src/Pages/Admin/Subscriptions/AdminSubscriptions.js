import { Box, Stack } from "@chakra-ui/react"
import Title from "../../../Components/Title"
import CreateSubscription from "../../../Components/Subscriptions/CreateSubscription"
import { useEffect } from "react"
import { useActionData } from "react-router-dom"
import useShowToast from "../../../hooks/useShowToast"
import ActivateOrDisactivateSubscriptions from "../../../Components/Subscriptions/ActivateOrDisactivateSubscriptions"

export default function AdminSubscriptions() {
  const actionData=useActionData();
  const toast=useShowToast()
  useEffect(
    ()=>{
      if(actionData===true)
      {
        toast(
          {
            title:"Dodano subsckrypcje",
            description: "Dodano subskrypcję.  Dodna subskrypcja jest obecnie niekatywna.",
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
  return (
<Box>
    <Title title='Zarządzaj subskrypcjami' />
    <Stack spacing={'40px'} padding={[2,4,4,8,16]}>
        <CreateSubscription />
        <ActivateOrDisactivateSubscriptions activateComponent />
        <ActivateOrDisactivateSubscriptions />
        
    </Stack>

</Box>
  )
}