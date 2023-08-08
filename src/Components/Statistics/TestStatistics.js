import { useEffect, useState } from "react"
import SelectTime from "../SelectTime"
import { Outlet, useLoaderData, useNavigate } from "react-router-dom"
import ShowBarsStatistics from "../ProgressBar/ShowBarsStatistics"
import universalFetchSchema from "../../fetch/universalFetchSchema";
import ModifyQuestion from "../ModifyQuestions/ModifyQuestion";
import { Stack } from "@chakra-ui/react";
import Question from "../Question";
export default function TestStatistics() {
    const [selectedTime, setSelectTime]=useState()
    const [response, setResponse]=useState()
    const [search, setSearch]=useState('')
    const [findQuestion, setFindQuestion]=useState()
    const [questions, setQuestions]=useState([])
    const [chosenQuestion, setChosenQuestion]=useState()
    const navigation=useNavigate();
    const testId=useLoaderData();
    useEffect(
        ()=>{
            if(selectedTime!=null)
            {
                getTestStatistics({
                    testId: testId,
                    time: selectedTime,
                    setResponse: setResponse
                })
            }
        },[selectedTime]
    )
    useEffect(
        ()=>{
            if(findQuestion)
            {
                findQuestionFetcher({search: search, testId: testId, setData: setQuestions})
                setFindQuestion(false)
            }
        },[findQuestion, setFindQuestion]
    )
    useEffect(
        ()=>{
            if(chosenQuestion!=null)
            {
            setSearch('')
            setQuestions([])
            navigation(`/user/tests/statistics/test/${testId}/question/${chosenQuestion.id}`)
            }else{
                setSearch('')
                setQuestions([])
                navigation(`/user/tests/statistics/test/${testId}`)
            }
        }, [chosenQuestion, setSearch, setQuestions]
    )
    const jsxQuestions=questions.map(
        (e)=><Question {...e} key={e.id} buttonText={'Statystyki'} color={'sel'} onClick={(event)=>setChosenQuestion(e)} />
    )
  return (
    <Stack gap={12}>
    <div>
        <SelectTime value={selectedTime} onChange={(e)=>setSelectTime(e.target.value)}/>
       {response && <ShowBarsStatistics element={response.result}  />}
    </div><div>
       <ModifyQuestion title='Wyszukaj pytanie' underTitle='Znajdź i wybierz pytanie, aby zobaczyć jego statystyki.' onChange={e=>setSearch(e.target.value)} value={search} searchButtonHandler={(e)=>setFindQuestion(true)} >
        {jsxQuestions}
        </ModifyQuestion>
       </div>
       {chosenQuestion &&<div className=" flex flex-col items-center">
        <h2 className="bold-sans-serif">Wybrane pytanie</h2>
        <Question {...chosenQuestion} buttonText={'Zamknij statystyki'} onClick={()=>setChosenQuestion(null)}   />
       </div>}
       <Outlet />
       </Stack>
       )
}




 async function getTestStatistics({testId,time, setResponse}) {
  const response = await universalFetchSchema(null, `/statistics/test/${testId}?howOld=${time}`, 'get','/login', true);
 if(response)
 {
    setResponse(response)
 }
}

async function findQuestionFetcher({search, testId, setData})
{
    const formData=new FormData();
    formData.append('search', search)
    const request=new Request('/',{method: 'post', body: formData})
    const response = await universalFetchSchema(request,`/tests/${testId}/questions/owned`,'post', '/login', true);
    Array.isArray(response) && setData(response);

}

