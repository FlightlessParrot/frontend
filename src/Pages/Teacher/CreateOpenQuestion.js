import { Checkbox, Flex, FormControl, FormErrorMessage, FormLabel, Image, Input, Text } from "@chakra-ui/react";
import { Form, Link, useActionData } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useShowToast from "../../hooks/useShowToast";
import Title from "../../Components/Title";

import PresentImage from "../../Components/Image/PresentImage";
import ImageForm from "../../Components/Image/ImageForm";

export default function CreateOpenQuestion() {
  const data=useActionData()
  const toast=useShowToast()
 
  const [question, setQuestion]=useState('')
  const [dirty, setDirty]=useState({
    question: false
  })
  const [check, setCheck]=useState(false)
  const [controller, setController]=useState(false)
  const fileRef=useRef(null)

  const keyRef=useRef(1)

useEffect(
  ()=>{
    console.log(controller)
    if(controller)
    {
    if(data?.questionId )
    { 
      toast(
        {
          title: 'Udało się',
          description: 'Pomyślnie dodano pytanie do testu.',
          status: 'success'
        } 
      )
      setQuestion('');
      keyRef.current++
      setCheck(false)
    }
    if(data!=null && !data?.questionId)
    { 
      toast(
        {
          title: 'Błąd',
          description: 'Nie udało się dodać pytania do testu.',
          status: 'error'
        }
      )
    }
    data && setController(false)
  }
  },[data,toast,setQuestion, controller, controller]
)


const questionIsInvalid=question==='' && dirty.question

  return (
   <Form key={keyRef.current} className="flex flex-col gap-8" method="post">
    <Title title='Dodaj otwarte pytania do egzaminu'/>
    <Flex direction={'column'} gap={20} p={[2,4,4,8,16]}>
      <ImageForm fileRef={fileRef} check={check} setCheck={setCheck} isValid/>
    <PresentImage fileRef={fileRef} />
    <FormControl isInvalid={questionIsInvalid}>
        <FormLabel>Dodaj pytanie</FormLabel>
        <Text color={"gray.500"} size='xs'>Pytanie nie może zawierać więcej niż 250 znaków</Text>
        <Input value={question} name='question' onChange={e=>{setDirty(s=>({...s,question: true}));setQuestion(e.target.value)}} required maxLength={250} placeholder="Czy pantofelek ma nibynóżkę?"></Input>
        <FormErrorMessage>Pytanie nie może być puste.</FormErrorMessage>
    </FormControl>
    <input readOnly className="hidden" name='type' value='open' />
    <Flex justify={'end'}><button className='action-button' onClick={(e)=>{
      if(questionIsInvalid ){ e.preventDefault()}
      else {setController(true)}
    }}>
      Dalej
      </button> </Flex>
    <Flex justify={'end'}><Link to='/user/team/egzam' className='action-button'>Zakończ przygotowanie egzaminu</Link></Flex>
    
    </Flex>
   </Form>
  )
}