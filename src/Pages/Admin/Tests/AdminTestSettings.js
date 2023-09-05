import { Box, Stack, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useChangeSubscriptionAndShowToast from "../../../hooks/useChangeSubscriptionAndShowToast";
import CreateQuestion from "../../../Components/CreateQuestion/CreateQuestion";
import AddOrDeleteQuestion from "../../../Components/ModifyQuestions/AddOrDeleteQuestion";

export default function AdminTestSettings() {
    const loaderData=useLoaderData()
    const [subscription, setSubscription]=useState(loaderData.test.subscription_id);
    const subscriptions=loaderData.subscriptions.map(e=><option value={e.id} key={e.id}>{e.name}</option>)
    const changeSubscription=useChangeSubscriptionAndShowToast()
    useEffect(
        ()=>{
            if(loaderData.test.subscription_id!==subscription)
            {
                changeSubscription(loaderData.test.id,subscription)
            }
        },[loaderData.test, subscription, changeSubscription]
    )
    return <Box >
        <h2 className="lead text-2xl my-12 block" >Modyfikuj Pakiet: {loaderData.test.name}</h2>
        <Stack >
        <FormControl >
        <FormLabel>Zmień subskrypcję pakietu</FormLabel>
        <Select required value={subscription} onChange={e=>setSubscription(e.target.value)} >{subscriptions}</Select>
        </FormControl>
        </Stack>
        <Stack spacing={40} marginY={40}>
        <CreateQuestion />
        <AddOrDeleteQuestion testId={loaderData.test.id} admin/>
        </Stack>
    </Box>
}