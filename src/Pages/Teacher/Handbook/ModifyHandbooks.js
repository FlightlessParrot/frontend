import { useEffect, useState } from "react";
import SearchTest from "../../../Components/SearchBars/SearchTest";
import { useLoaderData, useRevalidator } from "react-router-dom";
import { Stack, Wrap } from "@chakra-ui/react";
import { TestIconWithButton } from "../../../Components/TestIcon";
import universalFetchSchema from "../../../fetch/universalFetchSchema";
import useShowToast from "../../../hooks/useShowToast";

export default function ModifyHandbooks() {
    const [test, setTest]=useState(null)
    const [deleteTest, setDeleteTest]=useState(null)
    const [response, setResponse]=useState(null)
    const toast=useShowToast()
    const loaderData=useLoaderData()
    const revalidator=useRevalidator()
    useEffect(
        ()=>{
            if(test)
            {
                addTestToTeam({teamId: loaderData.teamId,test:test, setTest:setTest, setResponse: setResponse,revalidator: revalidator })
            }
        },[test]
    )
    useEffect(
        ()=>{
            if(deleteTest)
            {
                removeTestFromTeam({teamId: loaderData.teamId, test:deleteTest, setTest:setDeleteTest, setResponse: setResponse,revalidator: revalidator  })
            }
        },[deleteTest]
    )

    useEffect(
        ()=>{
            if(response)
            {
                toast(response)
            }
        },[response]
    )
    const testInstances=loaderData.tests.map((e)=><TestIconWithButton TestIconDataObject={e} buttonText={'Usuń'} color='red' onClick={()=>setDeleteTest(e)}/>)
  return (

    <Stack spacing={10} marginY={20}> 
    
    <SearchTest choseTestHandler={setTest} buttonText={'Udostępnij'} custom={true}>

    </SearchTest>
    <b className="lead">Udostępnione materiały</b>
    <Wrap spacing={12}>
    {testInstances}
    </Wrap>
    </Stack>
  )
}

async function addTestToTeam({teamId, test, setTest, setResponse, revalidator })
{
    const response=await universalFetchSchema(null,`/teams/${teamId}/tests/${test.id}/add`,'post','/login',true)
    setTest(null)
    setResponse(response)
    revalidator.revalidate()
}
async function removeTestFromTeam({teamId, test, setTest, setResponse, revalidator})
{
    const response=await universalFetchSchema(null,`/teams/${teamId}/tests/${test.id}/delete`,'delete','/login',true)
    setTest(null)
    setResponse(response)
    revalidator.revalidate()
}