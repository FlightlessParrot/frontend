import { Box, Button, Checkbox, Flex, useBoolean } from "@chakra-ui/react";
import UserContactFields from "../../Components/Forms/UserContactFields";
import { Form, Link, useLoaderData,  Outlet, useRevalidator, useActionData, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import DataLayout from "../../Components/Data/DataLayout";
import useShowToast from "../../hooks/useShowToast";
import AccountRole from "../../Components/Account/AccountRole";
import useToogleNewsletter from "../../hooks/useToogleNewsletter";



export default function UserData() {
  const [readOnly, setReadOnly]=useBoolean(true)
 
  const [toaster, setToaster]=useBoolean(false);
  const [key, setKey]=useState(1)
  const revalidator=useRevalidator()
  const loaderData=useLoaderData();
  const actionData=useActionData();
  const location = useLocation() 
  const toast=useShowToast();
  const toggleNewsletter=useToogleNewsletter()
  console.log(loaderData)
  
  useEffect(
    ()=>{
      if(toaster)
      {
      if(actionData?.ok && actionData.ok)
      {
        toast(
          {title: 'Sukcess',
          description: 'Udało się zmienić dane.',
          status:'success'
        }
        )
        setToaster.off()
      }else{
        if(actionData?.status)
        {
          toast(
            {title: 'Błąd',
            description: 'Nie udało się zmienić danych.',
            status:'error'
          });
          revalidator.revalidate()
          setKey(s=>s+1);
          setToaster.off()
        }
      }
    }
    },[actionData, toast, revalidator, setKey]
  )
  return (
   <Box padding={[2,4,4,8,16]}>
      
      <DataLayout title='Dane kontaktowe'>
        <Form method='post'>
      <UserContactFields key={key} readOnly={readOnly} data={{...loaderData.adress,name: loaderData.user.name}}  />
      {readOnly ?<Flex justify={'end'}><button onClick={setReadOnly.off} className="action-button float-right">Edytuj</button></Flex>
     : <Flex justify={'space-between'} alignItems={'center'}><Button colorScheme="red" onClick={(e)=>{
        e.preventDefault();
        setReadOnly.on()
        revalidator.revalidate();
       setKey(s=>s+1)
      }}>Odrzuć zmiany</Button><button className="action-button" onClick={()=>{setToaster.on(); setReadOnly.on()}}>Aktualizuj</button></Flex>}
      </Form>
    </DataLayout>
    <DataLayout title='Uprawnienia konta'>
      <AccountRole role={loaderData.user.role} price={'300'}  />
    </DataLayout>
    <DataLayout title='Hasło'>
      <Outlet />
      {location.pathname!=='/user/account/data/password/update' &&
        <Link to='password/update' className="action-button">Zmień hasło</Link>}
    </DataLayout>
    <DataLayout title='Newsletter'>
      <Checkbox  isChecked={loaderData.adress.newsletter===1} onChange={e=>{toggleNewsletter(revalidator);}}>Wysyłaj mi newsletter</Checkbox>
    </DataLayout>
   </Box>
  )
}