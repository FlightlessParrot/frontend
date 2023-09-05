import {Box, useSteps, Flex, Button, useBoolean
   } from "@chakra-ui/react";
   import MyStepper from "../Stepper/MySteppper";
import useCategoriesReducer from "../../hooks/useCategoriesReducer";
import ChooseType from "./ChooseType";
import { useEffect, useRef, useState } from "react";
import WriteQuestion from "./WriteQuestion.js";
import WriteAnswers from "./WriteAnswers/WriteAnswers";
import LastPage from "./LastPage";
import useCreateQuestion from "../../hooks/useCreateQuestion";
import {  useParams } from "react-router-dom";


export default function CreateQuestion() {
    const steps = [
        { title: 'Pierwszy', description: 'Wybierz rodzaj pytania' },
        
        { title: 'Drugi', description: 'Stwórz pytanie' },
        { title: 'Trzeci', description: 'Dodaj odpowiedzi' },
      ]
      const {testId}=useParams()
    
      const sendData=useCreateQuestion();
      const { activeStep, setActiveStep, goToNext, goToPrevious } = useSteps({
        index: 0,
        count: steps.length,
      })
      const [categoryState, categoryDispatch]=useCategoriesReducer(true)
      const [type, setType]=useState('one-answer')
      const [answers, setAnswers]=useState(null)
      const [explanation, setExplanation]=useState('')
      const [question, setQuestion]=useState('')
      const [send, setSend]=useBoolean()
      const [isSuccessfull, setIsSuccesfull]=useState(false)
      const [key, setKey]=useState(0)
      const fileRef=useRef(null)
     
      useEffect(
        ()=>{ 
          
          if(send)
          {
            const questionData={question: question, type: type, category_id: categoryState['categories'].length ? categoryState['categories'][0]: null,
            undercategory_id: categoryState['undercategories'].length ? categoryState['undercategories'][0] : null, explanation: explanation === '' ? null: explanation
            }

        
             sendData(testId,questionData,  answers, setIsSuccesfull, fileRef )

             setSend.off()
          }
         
        },[send, setSend, sendData, answers, testId, categoryState, explanation, question, type, fileRef, setIsSuccesfull]
      )

      useEffect(
        ()=>{
          if(isSuccessfull)
          {
            setKey(s=>s+1);
            setAnswers(null);
            setExplanation('');
            setQuestion('');
            setActiveStep(0)
            setIsSuccesfull(false)
          }
        },[setKey,isSuccessfull, setAnswers, setExplanation, setQuestion, setActiveStep, setIsSuccesfull]
      )
   
  return (
    <Box key={key}>
    <MyStepper activeStep={activeStep} steps={steps}/>
    <Box padding={[4,8]}>
      {activeStep===0 && <ChooseType categoryState={categoryState} categoryDispatch={categoryDispatch} typeValue={type} onTypeChange={e=>setType(e.target.value)}  />}
      <div className={activeStep !==1 ? 'hidden' : 'visible'}  ><WriteQuestion value={question} fileRef={fileRef} onChange={e=>setQuestion(e.target.value)} /></div>
      {activeStep === 2 && <WriteAnswers type={type} setAnswers={setAnswers} />}
      {activeStep ===3 && <LastPage value={explanation} onChange={e=>setExplanation(e.target.value)} setSendData={setSend}/>}
        </Box>
        <Flex justify={'space-around'} >
            <Button onClick={goToPrevious} colorScheme="whiteAlpha">Poprzedni krok</Button>
            <Button onClick={goToNext} colorScheme="whiteAlpha">Następny krok</Button>
        </Flex>
    </Box>
  )
}