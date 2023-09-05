import { useCallback, useEffect, useRef, useState } from "react";
import ModifyQuestion from "./ModifyQuestion"
import universalFetchSchema from "../../fetch/universalFetchSchema";
import Question from "../Question";
import MyAlert from "../Alerts/MyAlert";
import { useDisclosure } from "@chakra-ui/react";
import { alertDefault } from "../../Data/alertData";

export default function AddOrDeleteQuestion({add, testId, admin}) {
    const [value, setValue]=useState('');
    const [questions, setQuestions]=useState([])
    const {isOpen, onOpen, onClose}=useDisclosure()
    const [responseStatus, setResponseStatus]=useState()
    const formRef=useRef(null);
    const modifyQuestionText=add ?{
        title: 'Dodaj pytanie', 
        undertitle: 'Możesz dodać pytanie do pakietu'}:
        {
            title: 'Usuń pytanie', 
            undertitle: 'Możesz usunąć pytanie z pakietu'};

const fetcher=useCallback(async()=>{

        const formData=new FormData(formRef.current)
        console.error(formData)
        const request=new Request('/',{method: 'post', body: formData})
        const urlEnd= add ? 'unowned' : 'owned'
  
        const response=await universalFetchSchema(request,'/tests/'+testId+'/questions/'+urlEnd,'post', '/login', true);
        if(Array.isArray(response))
        {
            setQuestions(response)
        }},[add,testId, value, formRef])

    useEffect(()=>{
        
        fetcher();
       
    },[value, fetcher])

    const clickHandler=(id)=>{
        const fn=async ()=>
        {
            
        
        let urlEnd= add?
        '/attach'
        :
        '/detach'
        ;
        if(admin)
        {
          urlEnd='/remove'
        }
        const urlStart=!admin ? '/tests/'+testId :''
        const method= add? 'post' : 'delete';
        const response =await universalFetchSchema(null, urlStart+'/questions/'+id+urlEnd,method);
        setResponseStatus(response)
        onOpen()
        
        }
        fn()
        fetcher()
    }
    const questionsIcons=questions.map((e)=><Question 
    key={e.id}
    type={e.type}
    question={e.question}
    buttonText={add ? 'Dodaj': 'Usuń'}
    onClick={(event)=>clickHandler(e.id)}
    color={add ? 'sel': 'red'}
    
    />)
    const alertData= responseStatus ? alertDefault.positive : alertDefault.negative;
  return<>
    <MyAlert isOpen={isOpen} onClose={onClose} {...alertData} />
  <ModifyQuestion {...modifyQuestionText}  value={value} onChange={(e)=>setValue(e.target.value)} searchButtonHandler={fetcher} formRef={formRef}>

    {questionsIcons}
  </ModifyQuestion></> 
}

