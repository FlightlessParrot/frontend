import { Box, Center, Divider, useDisclosure } from "@chakra-ui/react";
import AnswerCategory from "./AnswerCategory";
import HappyCircle from "../Circles/HappyCircle";
import SadCircle from "../Circles/SadCircle";
import NotCountMe from "../Buttons/NotCountMe"
import { useEffect, useState } from "react";
import useShowToast from "../../hooks/useShowToast";


export default function CheckAnswer({question, children, correct=null, generatedTest}) {
    const {isOpen, onToggle }=useDisclosure()
    const [responseOk,setResponseOk]=useState();
    const toast=useShowToast()
    const icon=()=>{ switch(correct)
                {
                    case 1:
                        return <HappyCircle />
                    case 0:
                        return <SadCircle />
                    default: 
                        return null
                }
    }
    useEffect(
    ()=>{     if(responseOk)
        {
            
            toast({title: 'Usunięto ze statystyk.',
        description: `Pytanie "${question.question}" nie będzie liczone na potrzeby statystyk.`,
        statues:'success'})
        setResponseOk(null)
        }
        if(responseOk===false)
        {
            toast({title: 'Nie udało się usunąć ze statystyk',
        description: `Pytanie "${question.question}" wciąż jest liczone na potrzeby statystyk.`,
        status:'error'})
        setResponseOk(null)
        }
    },[responseOk, toast, question.question, setResponseOk]
    )
  return (
 <div className="flex flex-col bg-sel p-4 m-4 max-w-fit rounded" >
    {icon()}
    <AnswerCategory>Pytanie:</AnswerCategory>
    <Divider></Divider>
    <Center>
    <p className="max-w-lg ">{question.question}</p></Center>
    <AnswerCategory pt={[4,8]}>Udzielona odpowiedź</AnswerCategory>
    <Divider/>
    <Box p={[2,4]}>{children}</Box>
    {generatedTest.egzam===0 && question.type==='short-answer' && <NotCountMe testId={generatedTest.id} questionId={question.id} setResponseOk={setResponseOk} />}
    <Divider />
    {question.explanation && (<div>
        <Center><button className="action-button" onClick={onToggle}>{!isOpen ?'Zobacz': 'Schowaj'} wyjaśnienie</button></ Center>
        {isOpen &&
        <div>
        <AnswerCategory pt={[4,8]}>Wyjaśnienie</AnswerCategory>
        <p>{question.explanation}</p>
        
        </div>}

    </div>)}
 </div>
  )
}