import { useBoolean } from "@chakra-ui/react";

import Title from "../../../Components/Title";
import { Form, useActionData } from "react-router-dom";
import CustomTestSwitcher from "../../../Components/Forms/CustomTestSwitcher";

import CreateTestSetting from "../../../Components/CreateTestSetting";
import useGetCategoriesAndUndercategories from "../../../hooks/useGetCategoriesAndUndercategories";
import { useEffect, useState } from "react";

export default function CreateTestInstance() {
  const [egzam, setEgzam]=useBoolean(false)
  const [testId,chooseTest]=useState()
  const [response,setResponse]=useState({categories:[],undercategories: []})
  const actionData=useActionData()
  const getCategories=useGetCategoriesAndUndercategories({testId, setResponse})


  useEffect(
    ()=>{
      testId && getCategories();
    },[testId]

  )
  return (
    <Form method="post">
      <Title title="Rozpocznij test" newClass="mt-8" />
      <div className="p-10 ">
        <h3 className="bold-serif m-16">Ustawienia ogólne</h3>

        <CustomTestSwitcher testValue={testId} onTestSelect={e=>chooseTest(e.target.value)} />
      </div>
      <CreateTestSetting egzam={egzam} setEgzam={setEgzam}  {...response} />
     <div className="justify-end flex w-full"><button className="action-button">Zaczynam Test</button></div> 
    </Form>
  );
}

