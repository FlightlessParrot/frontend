import { useEffect, useRef, useState, useCallback } from "react";
import universalFetchSchema from "../../fetch/universalFetchSchema";
import ModifyQuestion from "./ModifyQuestion";
import Question from "../Question";
import { useNavigate } from "react-router-dom";

export default function EditQuestion({testId}) {
    const [questions, setQuestions]=useState([])
    const [search, setSearch]=useState('')
    const formRef=useRef(null)
    const text={
        title: 'Edytuj pytanie',
        undertitle: 'Zmień pytanie w pakiecie'
    }
    const navigate=useNavigate()
    const getQuestions=useCallback(async()=>{

        const formData=new FormData(formRef.current)
        const request=new Request('/',{method: 'post', body: formData})
        const response=await universalFetchSchema(request,'/tests/'+testId+'/questions/owned','post', '/login', true);
        if(Array.isArray(response))
        {
            setQuestions(response)
        }},[testId, formRef])
    
        useEffect(()=>{
            getQuestions();

        },[search, getQuestions])
    const questionIcons=questions.map(
        (e,i)=><Question 
            key={e.id}
            question={e.question}
            type={e.type}
            buttonText={'Edytuj'}
            onClick={(event)=>navigate('/user/admin/tests/'+testId+'/questions/'+e.id)}
            color={'sel'}
        />
    )
  return (
   <ModifyQuestion {...text} value={search} onChange={e=>setSearch(e.target.value)} searchButtonHandler={getQuestions} formRef={formRef} pageChildren>
    {questionIcons}
   </ModifyQuestion>
  )
}