import { Flex, FormControl, FormErrorMessage, FormLabel, Input, Box, Stack, Select,  } from "@chakra-ui/react";
import useShowToast from '../../../hooks/useShowToast'
import Title from "../../../Components/Title";
import CategoriesAndUndercategoriesCheckboxes from "../../../Components/Forms/CategoriesAndUndercategoriesCheckboxes";
import useCategoriesReducer from "../../../hooks/useCategoriesReducer";
import { useActionData, useLoaderData, useSubmit, Form } from "react-router-dom";
import useFormController from "../../../hooks/useFormController";
import ImageForm from "../../../Components/Image/ImageForm";
import PresentImage from "../../../Components/Image/PresentImage";
import { useState, useRef } from "react";
import { useEffect } from "react";
import  Quill  from "react-quill";

export default function CreateFlashcard() {
    const [categoryState,categoryDispatch]=useCategoriesReducer(true)
    const initValue={
        question:{
            blur: false,
            value: ''
        },
        answer: {
            blur: false,
            value: ''
        }
    }
    const submit=useSubmit()
    const [state, dispatch]=useFormController(initValue)
    const [check, setCheck]=useState(false)
    const toast=useShowToast()
    const ref=useRef(null)
    const loaderData=useLoaderData()
    const actionData=useActionData()
    const [subscription, setSubscription]=useState('')
    const options = loaderData.subscriptions.map(e=><option key={e.id} value={e.id}>{e.name}</option>)
    const [value, setValue]=useState('')

    useEffect(
        ()=>{
            if(loaderData.subscriptions[0]?.id)
            {
                setSubscription(loaderData.subscriptions[0]?.id)
            }
        },[loaderData, setSubscription]
    )
    useEffect(
        ()=>{
            if( actionData?.flashcard)
            {
                if(actionData.flashcard==='error')
                {
                    toast({
                        title: 'Nie stworzono fiszki',
                        description: "Nie udało się utworzyć fiszki",
                        status: 'error'
                    })
                }else{
                    toast({
                        title: 'Stworzono fiszkę',
                        description: "Fiszka została stworzona",
                        status: 'success'
                    })
                }
            }
        },[actionData?.flashcard]
    )

    useEffect(
        ()=>{
            if(actionData?.image)
            {
                if(actionData.image==='error')
                {
                    toast({
                        title: 'Nie dodano ilustracji do fiszki',
                        description: "Nie udało się dodać ilustracji do utworzonej fiszki.",
                        status: 'error'
                    })
                }else{
                    toast({
                        title: 'Dodanop ilustrację',
                        description: "Ilustracja została dodana do fiszki.",
                        status: 'success'
                    })
                }
            }
        },[actionData?.image]
    )

    function submitHandler(e)
    {   
   
        e.preventDefault()
        if(value!=='<p><br></p>')
        {
        const formData=new FormData()
        formData.append('question',state.question.value);
        formData.append('answer',value);
        formData.append('subscription',subscription)
        categoryState.categories.length && formData.append('category_id',categoryState.categories[0])
        categoryState.undercategories.length && formData.append('undercategory_id',categoryState.undercategories[0])
        ref.current.files.length && formData.append('image',ref.current.files[0])
        submit(formData,{method: 'post',encType: 'multipart/form-data'	})
        dispatch('reset')
        setCheck(false)
        categoryDispatch('reset')
        ref.current.value=null
        }
        
    }   

  return (
    <div>
        <Title title='Stwórz fiszkę' />
        <Box padding={[2,4,4,8,16]}>
            <Form onSubmit={submitHandler}>
                <Stack spacing={16}>
                    <FormControl>
                        <FormLabel>Wybierz subskrypcję, dla której stworzysz fiszkę</FormLabel>
                        <Select required name='subscription' value={subscription} onChange={e=>setSubscription(e.target.value)}>
                            {options}
                        </Select>
                    </FormControl>
                <FormControl isInvalid={state.question.blur && state.question.value===''}>
                    <FormLabel>Pytanie</FormLabel>
                    <Input name='question' value={state.question.value} onChange={dispatch} maxLength={250} required />
                    <FormErrorMessage>Uzupełnij mnie!</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={value.replaceAll(/<(\/?)([a-z]+)>/g,'')==='' }>
                    <FormLabel>Odpowiedź</FormLabel>
                    <Quill  id='quill' theme='snow' value={value} onChange={setValue} />
                    <FormErrorMessage>Uzupełnij mnie</FormErrorMessage>
                </FormControl>
                <CategoriesAndUndercategoriesCheckboxes categories={loaderData.categories} undercategories={loaderData.undercategories} categoryState={categoryState} categoryDispatch={categoryDispatch}/>
                </Stack>
               
               <ImageForm check={check} setCheck={setCheck} fileRef={ref} />
               <PresentImage fileRef={ref} />
               <Flex justify={'end'}><button className="action-button">Stwórz</button></Flex> 
            </Form>

        </Box>
    
    </div>
  )
}