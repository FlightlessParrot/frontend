import { Box, Stack, FormControl, FormLabel } from "@chakra-ui/react";
import DataLayout from "../../../Components/Data/DataLayout"
import IconImage from "../../../Components/Image/IconImage"
import { useLoaderData, useRevalidator } from "react-router-dom";
import useChangeSubscriptionAndShowToast from "../../../hooks/useChangeSubscriptionAndShowToast";
import CreateQuestion from "../../../Components/CreateQuestion/CreateQuestion";
import AddOrDeleteQuestion from "../../../Components/ModifyQuestions/AddOrDeleteQuestion";
import SubscriptionsCheckboxes from "../../../Components/Subscriptions/SubscriptionsCheckboxes";
import EditQuestion from "../../../Components/ModifyQuestions/EditQuestion";
import PresentImage from "../../../Components/Image/PresentImage";
import ImageForm from "../../../Components/Image/ImageForm";
import { useRef, useState } from "react";
import getCSRFToken from "../../../cookies/getCSRFToken";
import useShowToast from "../../../hooks/useShowToast";

//test/{test}/image/add
export default function AdminTestSettings() {
    const loaderData=useLoaderData()
    const revalidator=useRevalidator()
    const changeSubscription=useChangeSubscriptionAndShowToast()
    const changeHandler=(e)=>{
        changeSubscription(loaderData.test.id,e.target.value); 
        revalidator.revalidate()
    }
    const toast = useShowToast()
    const fileRef=useRef(null);
    const [check, setCheck]=useState(false)

    const  imageSubmitHandler=async (e)=>{
        e.preventDefault();
        try{
        const body=new FormData(e.currentTarget);
        body.append('_method','put')
        const token=await getCSRFToken();
        const url = process.env.REACT_APP_BACKEND + '/test/'+loaderData.test.id+'/image/add';
        const option = {
          method: 'post',
          credentials: "include",
          headers: { "X-XSRF-TOKEN": token, 'Accept': "application/json" },
          body: body
        };
        const response = await fetch(url,option)

        if(response.ok)
        {
            toast({title: 'Sukces', description: 'Udało się zmienić zdjęcie', status: 'success'})
        }else{
            throw new Error('Fetching image is broken');
        }
        }catch(e)
        {
            toast({title: 'Błąd', description: 'Coś poszło nie tak', status: 'error'})
            console.error(e.message)
        }
        
    }
    return <Box >
        <h2 className="lead text-2xl my-12 block" >Modyfikuj Pakiet: {loaderData.test.name}</h2>
        <Stack spacing={20}>
        <FormControl >
        <FormLabel>Zmień subskrypcje pakietu</FormLabel>
        <SubscriptionsCheckboxes subscriptions={loaderData.subscriptions} checkedSubscrptions={loaderData.test.subscriptions} onChange={changeHandler} />
        </FormControl>
        <DataLayout title={'Zmień obrazek'}>
            <form onSubmit={imageSubmitHandler} enctype="multipart/form-data" className="flex gap-8 flex-col">

            
            <IconImage path={process.env.REACT_APP_BACKEND + loaderData.test.path} />
            <ImageForm fileRef={fileRef} check={check} setCheck={setCheck} id_suffix={'Sec'}  />
            <PresentImage fileRef={fileRef} />
            {fileRef.current?.files[0]!==null && <button className="action-button self-end">Wyślij nowe zdjęcie</button>}
            </form>
            </DataLayout>
        </Stack>
        <Stack spacing={40} marginY={40}>
        
        <CreateQuestion />
        <EditQuestion testId={loaderData.test.id}  />
        <AddOrDeleteQuestion testId={loaderData.test.id} admin pageChildren/>
        </Stack>
    </Box>
}