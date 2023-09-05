import {  useLoaderData, useRevalidator } from "react-router-dom"
import Title from "../../Components/Title";
import { Box, Button, Image } from "@chakra-ui/react";
import getCSRFToken from "../../cookies/getCSRFToken";
import { useEffect, useState } from "react";
import { TestUserLayout } from "../../Components/Layouts/UserLayout";
import useShowToast from "../../hooks/useShowToast";
export default function OpenQuestionCheck() {
    const loaderData=useLoaderData();
    const test=loaderData.test
    const question=loaderData.question
    const answer=loaderData.openAnswer
    const revalidator=useRevalidator()
    const toast=useShowToast()
    const [response, setResponse]=useState(null)

    useEffect(
      ()=>{
        if(response!= null)
        {
        if(  response.ok)
        {
          toast({title: 'Sukces',description:'Udało się dodać ocenę.',status:'success'})
          revalidator.revalidate()
        }else{
          toast({title: 'Błąd',description: 'Nie udało się dodać oceny.',status: 'error'})
        }
      }
      },[response]
    )
  return (
    <TestUserLayout>
   
        <Title title='Sprawdź pytania otwarte' />
        <i className="pl-6 block">Pytania do egzaminu "{test.name}"</i>
    <Box p={[2,4,4,8,16]}>

        <Image src={question.path} />
        <section className="my-8">
        <h2 className="lead">{question.question}</h2>
        <b className="bold-serif ">Odpowiedź na pytanie</b>
        <p>
            {answer.answer}
        </p>
        </section>
        <div className="flex justify-between">
   
        <Button colorScheme="red" onClick={()=>gradeQuestion(answer.id,'bad', setResponse)}>Zła Odpowiedź</Button>
       
         <Button colorScheme="green" onClick={()=>gradeQuestion(answer.id,'good', setResponse)}>Dobra odpowiedź</Button>
    
        </div>
    </Box>
   
    </TestUserLayout>
  )
}
async function gradeQuestion(openAnswerId, grade, setResponse)
{
  const token = await getCSRFToken()
  const url = process.env.REACT_APP_BACKEND + `/open-answers/${openAnswerId}/grade`


    const body = new FormData()
    body.append('grade',grade)
    body.append('_method','put')
    const option = {
      method:'post',
      credentials: "include",
      headers: { "X-XSRF-TOKEN": token, 'Accept': "application/json" },
      body: body
    };
 
      const response = await fetch(url, option);

    setResponse(response)
    
}