import { Form, useActionData } from "react-router-dom";
import Title from "../../../Components/Title";
import { FormControl, FormErrorMessage, FormLabel, Input, Stack, Box, Toast } from "@chakra-ui/react";
import  Quill  from "react-quill";
import useFormController from "../../../hooks/useFormController"
import { useEffect, useState } from "react";
import useShowToast from "../../../hooks/useShowToast";
export default function Mail
() {
    const actionData=useActionData()
    const initValue={
        subject:{
            value: '',
            blur: false
        },
       
    }
    const toast=useShowToast()
    const [value, setValue]=useState('')
    const [state,dispatch]=useFormController(initValue)
    const clickHandler=(event)=>{
        if(state.subject.value==='' || value==='')
        {
            event.preventDefault();
            alert('Zapomniałeś o wiadomości!!!')
        }
    }
    useEffect(
        ()=>{
            if(actionData?.error)
            {
                toast(
                    {
                        title: 'Błąd',
                        description: 'Nie udało się wysłać maila.',
                        status: 'error'
                    }
                )
            }
            if(actionData?.newsletter){
                toast(
                    {
                        title: 'Wysłano maila',
                        description: 'Mail został przekazany do wysyłki.',
                        status: 'success'
                    }
                    
                )
                setValue('');
                    dispatch('reset')
            }
        },[actionData, toast, dispatch. setValue]
    )
  return (
    <div>
        <Title title='Wyślij mail do użytkowników' />
        <Box padding={[2,4,4,8,16]}>
            <Form method='post'>
                <Stack spacing={30}>
                <FormControl isInvalid={state.subject.blur && state.subject.value===''}> 
                    <FormLabel>Temat wiadomości</FormLabel>
                    <Input value={state.subject.value} onChange={dispatch} name='subject' maxLength={250} required />
                    <FormErrorMessage>Musisz wpisać temat wiadomości</FormErrorMessage>
                </FormControl>
                <FormLabel htmlFor="quill">Napisz wiadomość</FormLabel>
                <Quill  id='quill' theme='snow' value={value} onChange={setValue} />
                <input name='text' readOnly value={value} className="hidden" />
            </Stack>
                <button className="action-button" onClick={clickHandler}>Wyślij</button>
            </Form>
        </Box>
    </div>
  )
}