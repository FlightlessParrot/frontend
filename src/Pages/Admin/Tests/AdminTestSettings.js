import { Box, Stack, FormControl, FormLabel } from "@chakra-ui/react";

import { useLoaderData, useRevalidator } from "react-router-dom";
import useChangeSubscriptionAndShowToast from "../../../hooks/useChangeSubscriptionAndShowToast";
import CreateQuestion from "../../../Components/CreateQuestion/CreateQuestion";
import AddOrDeleteQuestion from "../../../Components/ModifyQuestions/AddOrDeleteQuestion";
import SubscriptionsCheckboxes from "../../../Components/Subscriptions/SubscriptionsCheckboxes";

export default function AdminTestSettings() {
    const loaderData=useLoaderData()
    const revalidator=useRevalidator()
    const changeSubscription=useChangeSubscriptionAndShowToast()
    const changeHandler=(e)=>{
        changeSubscription(loaderData.test.id,e.target.value); 
        revalidator.revalidate()
    }

    return <Box >
        <h2 className="lead text-2xl my-12 block" >Modyfikuj Pakiet: {loaderData.test.name}</h2>
        <Stack >
        <FormControl >
        <FormLabel>Zmień subskrypcje pakietu</FormLabel>
        <SubscriptionsCheckboxes subscriptions={loaderData.subscriptions} checkedSubscrptions={loaderData.test.subscriptions} onChange={changeHandler} />
        </FormControl>
        </Stack>
        <Stack spacing={40} marginY={40}>
        <CreateQuestion />
        <AddOrDeleteQuestion testId={loaderData.test.id} admin pageChildren/>
        </Stack>
    </Box>
}