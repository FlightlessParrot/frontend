import { useReducer } from "react";
import CreateOrder from "./CreateOrder";
import CreatePairs from "./CreatePairs";
import CreateShortAnswer from "./CreateShortAnswer";
import ManyAnswers from "./ManyAnswers";
import OneAnswer from "./OneAnswer";
import AddRemoveButton from "../../Buttons/AddRemoveButton";
import { Center } from "@chakra-ui/react";


export default function WriteAnswers({type, setAnswers}) {
  const reducer=(state, action)=>{
    let newState=state
    if(action==='next')
    {
      if(state<4)
      {
        newState++
      }
    }else{
      if(state>2)
      {
        newState--
      }
    }
    return newState;
  }
  const [howMany, howManyDispatch]=useReducer(reducer,4)
  console.log(howMany)
  return<> 
    <Center><AddRemoveButton minusFn={()=>howManyDispatch('back')} plusFn={()=>howManyDispatch('next')}/></Center>
    {type==="one-answer" && <OneAnswer howMany={howMany} setAnswers={setAnswers} />  }
    {type==="many-answers" && <ManyAnswers howMany={howMany} setAnswers={setAnswers} />  }
    {type==="pairs" && <CreatePairs howMany={howMany} setAnswers={setAnswers}/>}
    {type==='order' && <CreateOrder howMany={howMany} setAnswers={setAnswers} />}
    {type==='short-answer' && <CreateShortAnswer setAnswers={setAnswers} />}
  </>
}