import { useCallback } from "react";
import getCSRFToken from "../cookies/getCSRFToken"
import useShowToast from "../hooks/useShowToast"
import useAttachFileToQuestion from "./useAttachFileToQuestion";
export default  function useCreateQuestion() {
    const sendFile=useAttachFileToQuestion()
    const toast=useShowToast();
    
    const sendData=useCallback( async (testId, questionData, answerData, setIsSuccessfull, fileRef, method='post', questionId)=>{
        const url = method==='post' ? `/test/${testId}/question/create` :`/question/${questionId}/update`
       const token = await getCSRFToken() 
        if(questionData.type!==answerData.type)
        {
            toast({status:'error',
            'descritpion': 'Sprawdź czy formularz jest poprawnie wypełniony.',
        'title': 'Nie udało się utworzyć pytania'})
            return setIsSuccessfull(false)
        }
        const questionResponse=await fetch(process.env.REACT_APP_BACKEND+url,{
            method: 'post',
            credentials: 'include',
            headers: { "X-XSRF-TOKEN": token, 'Accept': "application/json", "Content-Type": "application/json" },
            body: JSON.stringify(questionData)
        }
    );    

        if(! questionResponse.ok)
        {
           
            toast({status:'error',
            'descritpion': 'Sprawdź czy formularz jest poprawnie wypełniony. Jeśli błąd będzie się powtarzał, odśwież stronę.',
        'title': 'Nie udało się utworzyć pytania'})
            return setIsSuccessfull(false)
        }

        
        const questionResponseData=await questionResponse.json() 
        await sendFile(fileRef, questionResponseData.question.id)

        console.error(questionResponseData)
    const answerResponse=await fetch(process.env.REACT_APP_BACKEND+`/question/${questionResponseData.question.id}/${answerData.type}/create`,{
        method: 'post',
        credentials: 'include',
        headers: { "X-XSRF-TOKEN": token, 'Accept': "application/json","Content-Type": "application/json" },
        body: JSON.stringify(answerData)
    });
    if(answerResponse.ok)
    {
        console.error(await answerResponse.json())
        toast({
            status:'success',
            title: 'Utworzono pytanie',
            description: 'Udało się utworzyć pytanie.'
        })
        return setIsSuccessfull(true)
    }
    else{
        toast({status:'error',
        'descritpion': 'Sprawdź czy formularz jest poprawnie wypełniony. Jeśli błąd będzie się powtarzał, odśwież stronę.',
    'title': 'Nie udało się utworzyć pytania'})
        return setIsSuccessfull(false)
    }
    },[toast, sendFile])
  return sendData
}