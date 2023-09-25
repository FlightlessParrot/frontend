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
      if(state.current<state.max)
      {
        newState.current++
      }
    }else{
      if(state.current>2)
      {
        newState.current--
      }
    }
    return {...newState};
  }
  const [howMany, howManyDispatch]=useReducer(reducer,{max: 5, current:4})
  
  return<> 
    <Center><AddRemoveButton minusFn={()=>howManyDispatch('back')} plusFn={()=>howManyDispatch('next')}/></Center>
    {type==="one-answer" && <OneAnswer howMany={howMany.current} setAnswers={setAnswers} />  }
    {type==="many-answers" && <ManyAnswers howMany={howMany.current} setAnswers={setAnswers} />  }
    {type==="pairs" && <CreatePairs howMany={howMany.current} setAnswers={setAnswers}/>}
    {type==='order' && <CreateOrder howMany={howMany.current} setAnswers={setAnswers} />}
    {type==='short-answer' && <CreateShortAnswer setAnswers={setAnswers} />}
  </>
}