import {FormControl, FormLabel, Input,  useBoolean, useDisclosure } from "@chakra-ui/react";

import Title from "../../../Components/Title";
import { Form, useActionData } from "react-router-dom";
import CustomTestSwitcher from "../../../Components/Forms/CustomTestSwitcher";

import CreateTestSetting from "../../../Components/CreateTestSetting";
import useGetCategoriesAndUndercategories from "../../../hooks/useGetCategoriesAndUndercategories";
import { useEffect, useState } from "react";
import MyAlert from "../../../Components/Alerts/MyAlert";

export default function CreateTestInstance({title}) {
  const [egzam, setEgzam]=useBoolean(true)
  const [testId,chooseTest]=useState()
  const [response,setResponse]=useState({categories:[],undercategories: []})
  const actionData=useActionData()
  const getCategories=useGetCategoriesAndUndercategories({testId, setResponse})
  const {isOpen, onOpen, onClose}=useDisclosure();
  console.log(actionData)

  useEffect(
    ()=>{
      testId && getCategories();
    },[testId, getCategories]
  )
    useEffect(
      ()=>{
       Array.isArray(actionData) && !actionData.length && onOpen();
      },[onOpen, actionData]
    )

  return (
     <Form method="post"> 

     {title ? <Title title="Rozpocznij test" newClass="mt-8" /> :
     <FormControl>
      <FormLabel>Nazwa egzaminu</FormLabel>
      <Input required maxLength={250} name='name'  /> 
      </FormControl>}
      <MyAlert isOpen={isOpen} status='error' title='Wystąpił błąd' description='Spróbuj utworzyć test wybierając więcej rodzajów pytań.' onClose={onClose}/>
      <div className="p-10 ">
        <h3 className="bold-serif m-16">Ustawienia ogólne</h3>

        <CustomTestSwitcher testValue={testId} onTestSelect={e=>chooseTest(e.target.value)} />
      </div>
      <CreateTestSetting egzam={egzam} setEgzam={setEgzam} readOnlyEgzam={!title} {...response} />
     <div className="justify-end flex w-full"><button className="action-button">{title ? 'Zaczynam Test' : 'Tworzę test'}</button></div> 
    </Form>
  );
}

