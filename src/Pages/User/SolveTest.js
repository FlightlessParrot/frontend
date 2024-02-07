import { Outlet, useLoaderData, useNavigate } from "react-router-dom"
import TestLayout from "../../Components/Layouts/TestLayout"
import TestInterface from "../../Components/TestInterface/TestInterface"
import { useEffect, useReducer, useState } from "react";
import useSubmitTest from "../../hooks/useSubmitTest";
import MyAlert from "../../Components/Alerts/MyAlert";
import { alertSolveTest } from "../../Data/alertData";
export default function SolveTest() {
    const data=useLoaderData();
    
    const navigation=useNavigate()

    useEffect(
      ()=>{data===false && navigation('/user/tests')},[data, navigation]
    )
    
    const init=(data)=>
    {
    const initValue={
        answers: {

        },
        qas:data.qas,
        howManyQuestions: data.qas.length,
        currentQuestion: 0,
        generatedTest: data.generatedTest
    }
    return {...initValue}
    }
    const [submit,setSubmit]=useState(false)
    const [state, dispatch]=useReducer(reducer,data, init )

    const [time, setTime]=useState('00:00:00')
    const [error, setError]=useState(false)

    const [showSummary, setShowSummary]=useState(false)
    const submitTest=useSubmitTest(state.answers,{time:time},data.generatedTest.id)

    useEffect(
      ()=>{
        if(submit)
        {
          setSubmit(false)
          const submit=async()=>{
          const response=await submitTest()
          response ? setShowSummary(true): setError(true);
          }
          submit()
        }

      },[submit,setSubmit, submitTest, setShowSummary]
    )
    
    useEffect(
      ()=>{
        if(showSummary)
        {
        const testId=data.generatedTest.id
        navigation(`/user/test/${testId}/review`)
        }
      },[showSummary, navigation, data.generatedTest.id]
    )
   
    function reducer(state, action)
    {
       if(action==='forward')
       {
        if(state.currentQuestion+1 >=state.howManyQuestions)
        {setSubmit(true)
        return{...state}
        }else{
        return {...state, currentQuestion: state.currentQuestion+1}
        }
       }else{
       const newState={...state}
        const id=state.qas[state.currentQuestion].question.id
       newState.answers[id]=action
       return{...newState}
       }
    }
  return (<>{!showSummary? 
    <TestLayout setSubmit={setSubmit} setTime={setTime}>
     {error && <div className="absolute top-0 "><MyAlert {...alertSolveTest} isOpen />
        <button onClick={()=>navigation('/user/tests')} className="action-button bg-red-500">Wychodzę bez ukończenia testu.</button>
      </div>}
        <TestInterface questionPack={data.qas[state.currentQuestion]} answersController={dispatch} currentQuestion={state.currentQuestion} />
    </TestLayout>:
    <Outlet context={state}  />
  }
      
    </>
  )
}