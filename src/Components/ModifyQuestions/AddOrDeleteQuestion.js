import { useEffect, useState } from "react";
import ModifyQuestion from "./ModifyQuestion"
import universalFetchSchema from "../../fetch/universalFetchSchema";
import Question from "../Question";
import MyAlert from "../Alerts/MyAlert";
import { useDisclosure } from "@chakra-ui/react";
import { alertDefault } from "../../Data/AlertData";

export default function AddOrDeleteQuestion({add, testId}) {
    const [value, setValue]=useState('');
    const [questions, setQuestions]=useState([])
    const {isOpen, onOpen, onClose}=useDisclosure()
    const [responseStatus, setResponseStatus]=useState()
    const modifyQuestionText=add ?{
        title: 'Dodaj pytanie', 
        undertitle: 'Możesz dodać pytanie do testu'}:
        {
            title: 'Usuń pytanie', 
            undertitle: 'Możesz usunąć pytanie z testu'};
const fetcher=async()=>{
        const formData=new FormData()
        formData.append('search',value)
        const request=new Request('/',{method: 'post', body: formData})
        const urlEnd= add ? 'unowned' : 'owned'
  
        const response=await universalFetchSchema(request,'/tests/'+testId+'/questions/'+urlEnd,'post', '/login', true);
        if(Array.isArray(response))
        {
            setQuestions(response)
        }}
    useEffect(()=>{
        
        fetcher();
       
    },[value])

    const clickHandler=(id)=>{
        const fn=async ()=>
        {
            
        
        const urlEnd= add?
        '/attach'
        :
        '/detach'
        ;
        const method= add? 'post' : 'delete';
        const response =await universalFetchSchema(null, '/tests/'+testId+'/questions/'+id+urlEnd,method);
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
  <ModifyQuestion {...modifyQuestionText}  value={value} onChange={(e)=>setValue(e.target.value)} searchButtonHandler={fetcher}>

    {questionsIcons}
  </ModifyQuestion></> 
}

