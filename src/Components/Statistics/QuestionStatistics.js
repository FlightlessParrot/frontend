import { useLoaderData } from "react-router-dom"
import getCSRFToken from "../../cookies/getCSRFToken";
import { useEffect, useState } from "react";
import SelectTime from "../SelectTime";
import LabeledProgressBar from "../ProgressBar/LabeledProgressBar";
import GreenRedStatisticsData from "../GreenRedStatisticsData/GreenRedStatisticsData";
import { Stack } from "@chakra-ui/react";

export default function QuestionStatistics() {
  const [statistics, setStatistics]=useState({
    summary:null,
    all:null
  });
  console.log(statistics)
  const [howOld, setHowOld]=useState()
  const loaderData=useLoaderData();

  useEffect(
    ()=>{
      if(howOld)
      {
        getQuestionStatistics(loaderData,howOld,setStatistics);
      }
    },[setStatistics, howOld]
  )
  return <div className='my-10'>
    <SelectTime value={howOld} onChange={e=>setHowOld(e.target.value)} />
    <Stack marginY={10} gap={8}>
      {statistics.summary && <LabeledProgressBar label='Procent poprawnie udzielonych odpowiedzi' width={statistics.summary} />}
      {statistics.all &&<Stack gap={4}>
        <b className="bold-sans-serif">Historia odpowiedzi</b>
        <Stack> 
        <GreenRedStatisticsData data={statistics.all} /></Stack>
      </Stack>}
    </Stack>
  </div>
}

async function getQuestionStatistics({testId, questionId},howOld, setStatistics)
{
  const CSRFtoken=await getCSRFToken();
 const response = await fetch(process.env.REACT_APP_BACKEND+`/statistics/question/${questionId}?howOld=${howOld}`,
 //test/${testId}/
 {
  credentials: 'include',
  headers: {
    "X-XSRF-TOKEN": CSRFtoken, 
    'Accept': "application/json" 
  }
 })
 if(response.ok)
 {
 const body=await response.json()

  setStatistics(body)
 }
}