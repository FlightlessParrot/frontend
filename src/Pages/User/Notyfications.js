import { useLoaderData } from "react-router-dom";
import { TestUserLayout } from "../../Components/Layouts/UserLayout";
import Notyfication from "../../Components/Notyfications/Notyfication";
import {  Stack } from "@chakra-ui/react";


export default function Notyfications() {
  const loaderData=useLoaderData( )
  const jsx=loaderData.notyfications.map(
    e=><Notyfication key={e.id} {...e}/>
  )
  return (
    <TestUserLayout>
      <Stack p={[2,4, 4, 8, 16]}>
        {loaderData.notyfications.length ?
      jsx:<h2 className="bold-sans-seric lead">Nie masz żadnych powiadomień.</h2>

        }
      </Stack>
    </TestUserLayout>
  )
}