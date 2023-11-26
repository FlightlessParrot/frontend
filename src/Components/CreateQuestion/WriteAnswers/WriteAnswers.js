
import CreateOrder from "./CreateOrder";
import CreatePairs from "./CreatePairs";
import CreateShortAnswer from "./CreateShortAnswer";
import ManyAnswers from "./ManyAnswers";
import OneAnswer from "./OneAnswer";
import AddRemoveButton from "../../Buttons/AddRemoveButton";
import { Center } from "@chakra-ui/react";
import { useEffect, useReducer } from "react";
import { useLoaderData } from "react-router-dom";


export default function WriteAnswers({type, setAnswers, controler, setControler}) {
  const loaderData=useLoaderData()
  const reducer=(state, action)=>{
    let newState=state
    if(action==='next')
    {
      if(state.current<state.max)
      {
        newState.current++
      }
    }
    if(action==='back'){
      if(state.current>2)
      {
        newState.current--
      }
    }
    if(action?.number)
    {
      newState.current=action.number
    }
    return {...newState};
  }
  const [howMany, howManyDispatch]=useReducer(reducer,{max: 5, current:4})
    useEffect(
   ()=> {
    if(loaderData?.question && controler.writeAnswers)
    {
      setControler(s=>({...s,writeAnswers:false}))
      if(loaderData.question.type!=='open' && loaderData.question.type!=='pairs')
      {
        if(loaderData.question.type==='order')
        {
          howManyDispatch({number: loaderData.question.squares.length})
        }
        else{
          howManyDispatch({number: loaderData.question.answers.length})
        }
        
      }
      if(loaderData.question.type==='pairs')
      {
        howManyDispatch({number: loaderData.question.squares.length/2})
      }
    }
    },[loaderData, howManyDispatch, controler, setControler]
  )
  return<> 
    <Center><AddRemoveButton minusFn={()=>howManyDispatch('back')} plusFn={()=>howManyDispatch('next')}/></Center>
    {type==="one-answer" && <OneAnswer howMany={howMany.current} setAnswers={setAnswers} controler={controler} setControler={setControler} />  }
    {type==="many-answers" && <ManyAnswers howMany={howMany.current} setAnswers={setAnswers} controler={controler} setControler={setControler} />  }
    {type==="pairs" && <CreatePairs howMany={howMany.current} setAnswers={setAnswers} controler={controler} setControler={setControler}/>}
    {type==='order' && <CreateOrder howMany={howMany.current} setAnswers={setAnswers} controler={controler} setControler={setControler}/>}
    {type==='short-answer' && <CreateShortAnswer setAnswers={setAnswers} />}
  </>
}