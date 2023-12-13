import { Flex, FormControl, FormErrorMessage, FormLabel, Input,  Stack,  } from "@chakra-ui/react";

import CategoriesAndUndercategoriesCheckboxes from "./CategoriesAndUndercategoriesCheckboxes";
import useCategoriesReducer from "../../hooks/useCategoriesReducer";
import { useLoaderData, useSubmit, Form } from "react-router-dom";

import ImageForm from "../Image/ImageForm";
import PresentImage from "../Image/PresentImage";
import SubscriptionsCheckboxes from "../Subscriptions/SubscriptionsCheckboxes"
import { useEffect,useState, useRef } from "react";
import  Quill  from "react-quill";



export default function FlashcardCreationForm({edit}) {

    const [categoryState,categoryDispatch]=useCategoriesReducer()

    const submit=useSubmit()
    const [question, setQuestion]=useState({
        blur: false,
        value: ''
    })

  
    const [check, setCheck]=useState(false)
 
    const ref=useRef(null)
    const formRef=useRef(null)
    const loaderData=useLoaderData()

   
    const [checkedSubscrptions, setCheckedSubscriptions]=useState([])
    
    const [value, setValue]=useState('')
    useEffect(
        ()=>{
            if(loaderData?.flashcard)
            {
                const flashcard=loaderData.flashcard
                console.log(flashcard)
                setQuestion({value: flashcard.question, blur: true})
                setValue(flashcard.answer)
                setCheckedSubscriptions(flashcard.subscriptions)
                categoryDispatch(
                    {
                       
                        newState:{
                            categories: flashcard.categories,
                            undercategories: flashcard.undercategories
                        }
                    }
                )
            }
        },[loaderData, setQuestion, setValue, setCheckedSubscriptions, categoryDispatch]
    )
  
    function submitHandler(e)
    {   
   
        e.preventDefault()
        if(value!=='<p><br></p>' && value!=='')
        {
        const formData=new FormData(formRef.current)
        if(edit)
        {
            formData.append('_method','put');   
        }
        // formData.append('question',question.value);
        formData.append('answer',value);
        checkedSubscrptions.forEach(
            e=>formData.append('subscriptions[]',e.id)
        )
        
        // categoryState.categories.length && formData.append('categories[]',categoryState.categories)
        // categoryState.undercategories.length && formData.append('undercategories[]',categoryState.undercategories)
        //ref.current.files.length && formData.append('image',ref.current.files[0])
        submit(formData,{method: 'post',encType: 'multipart/form-data'	})
        setQuestion({    blur: false,
            value: ''});
        setCheck(false)
        setValue('')
        categoryDispatch('reset')
        setCheckedSubscriptions([])
        ref.current.value=null
        }
        
    } 
    function changeSubscriptionsHandler(e)
    {
        e.preventDefault()
        const id=Number(e.target.value);
        if(checkedSubscrptions.filter(e=>e.id===id).length!==0)
        {
            setCheckedSubscriptions(s=>s.filter(e=>e.id!==id))
        }else{
            setCheckedSubscriptions(s=>[...s,{id: id}])
        }
    }  
  return (
    <Form ref={formRef} onSubmit={submitHandler}>
    <Stack spacing={16}>
       
        <FormControl>
            <FormLabel>{edit ? 'Zmień subskrypcje' :'Wybierz subskrypcje, dla których stworzysz fiszkę'}</FormLabel>
        <SubscriptionsCheckboxes subscriptions={loaderData.subscriptions} checkedSubscrptions={checkedSubscrptions} onChange={changeSubscriptionsHandler} />
        </FormControl>
    <FormControl isInvalid={question.blur && question.value===''}>
        <FormLabel>Pytanie</FormLabel>
        <Input name='question' value={question.value} onChange={(e)=>setQuestion({    blur: true,
        value: e.target.value})} maxLength={250} required />
        <FormErrorMessage>Uzupełnij mnie!</FormErrorMessage>
    </FormControl>
    <FormControl isInvalid={value.replaceAll(/<(\/?)([a-z]+)>/g,'')==='' }>
        <FormLabel>Odpowiedź</FormLabel>
        <Quill  id='quill' theme='snow' value={value} onChange={setValue} />
        <FormErrorMessage>Uzupełnij mnie</FormErrorMessage>
    </FormControl>
    <CategoriesAndUndercategoriesCheckboxes categories={loaderData.categories} undercategories={loaderData.undercategories} categoryState={categoryState} categoryDispatch={categoryDispatch}/>
    </Stack>
            {edit && <div className="my-12 mb-16">
                <b className="text-bold text-xl">Obecny obrazek</b>
        <img src={process.env.REACT_APP_BACKEND+loaderData.flashcard.path} alt='obecny obrazek fiszki' /></div>}
        {edit && <b className="text-bold text-xl">Nowy obrazek</b>}
   <ImageForm check={check} setCheck={setCheck} fileRef={ref} />
   <PresentImage fileRef={ref} />
   <Flex justify={'end'}><button className="action-button">{edit ? 'Edytuj' : 'Stwórz'}</button></Flex> 
</Form>
  )
}