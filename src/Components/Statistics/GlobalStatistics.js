import { Outlet, useLoaderData, useNavigate } from "react-router-dom"
import LabeledProgressBar from "../ProgressBar/LabeledProgressBar";
import { Flex, Stack } from "@chakra-ui/react";
import SearchTest from "../SearchBars/SearchTest";
import { useEffect, useState } from "react";
import Title from "../../Components/Title"
import TestIcon from "../TestIcon";
import Switcher from "../Forms/Switcher"
import useMsToTime from "../../hooks/useMsToTime";
export default function GlobalStatistics() {
  const [test, setTest]=useState(null)
  const [custom, setCustom]=useState(false)
  const [egzam,setEgzam]=useState(false)
    const loaderData=useLoaderData();
    const navigation=useNavigate()
    const time =useMsToTime(loaderData.average)
    useEffect(
      ()=>{
        test===null ? navigation('/user/tests/statistics/test/'): navigation('/user/tests/statistics/test/'+test.id)
      },[test]
    )
    
  return (<>
   
      <Title title="Statystyki" /> 
      <Stack paddingY={24}>
    <LabeledProgressBar label='Rozwiązane pytania' width={loaderData.result}/>
    <Flex className="flex-col w-fit">
        <b  className="bold-sans-serif">Średni czas rozwiązywania pytania</b>
        <strong className="article-title-font self-end">{ time[3]} </strong>
    </Flex></Stack>
    <div className="my-6">
      <Stack spacing={25}>
      <Switcher onChange={e=>setEgzam(e.target.checked)} isChecked={egzam} label='Wyszukaj tylko wyniki egzaminów' />
    {!egzam && <Switcher onChange={(e)=>setCustom(e.target.checked)} isChecked={custom}  label='Wyszukaj z własnych testów'/>}
    </Stack>
    <SearchTest choseTestHandler={setTest} buttonText={'Wybierz'} color='sel' egzam={egzam}/>
    {test && <Stack marginY={'3rem'} gap={3}>
      <b>Wybrany test</b>
      <TestIcon  name={test.name} id={test.id} onClick={()=>setTest(null)} path={test.path} custom={custom}/>
    </Stack>}</div>
    <div>
      <Outlet />
    </div>
    </>
  )
}