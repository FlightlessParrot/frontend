import { Divider } from "@chakra-ui/react";
import AnswerCategory from "./AnswerCategory";
import HappyCircle from "../Circles/HappyCircle";
import SadCircle from "../Circles/SadCircle";



export default function CheckAnswer({question, answer, correct=null}) {
    const icon=()=>{ switch(correct)
                {
                    case true:
                        return <HappyCircle />
                    case false:
                        return <SadCircle />
                    default: 
                        return null
                }
    }
  return (
 <div className="flex flex-col bg-sel p-4 max-w-sm rounded" >
    {icon()}
    <AnswerCategory>Pytanie:</AnswerCategory>
    <Divider></Divider>
    <p>{question}</p>
    <AnswerCategory>Udzielona odpowiedź</AnswerCategory>
    <Divider/>
    <p>{answer}</p>

 </div>
  )
}