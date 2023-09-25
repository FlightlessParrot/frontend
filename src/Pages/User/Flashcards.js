import {  useNavigate, useOutletContext } from "react-router-dom";
import Flashcard from "../../Components/Flashcard/Flashcard";
import { Center, Box } from "@chakra-ui/react";
import { useEffect, useReducer} from "react";

export default function Flashcards() {
   
    const outletContext=useOutletContext()
    const navigate=useNavigate()
    useEffect(
        ()=>{
            !outletContext?.flashcards && navigate('/user/test')
        },[outletContext,navigate]
    )

    const [state, dispatch]=useReducer(reducer,{currentElement: 0,navigate: navigate, flashcards: outletContext.flashcards.length })
    const jsx=outletContext.flashcards.map((e)=><Flashcard key={e.id} {...e}/>) 

    function reducer(state, action)
    {
        if(state.currentElement>=state.flashcards-1)
        {
            
            state.navigate('/user/tests');
            return {...state}
        }else{
            return {...state,currentElement: state.currentElement+1}
        }
    }
  return (
    <Box padding={[2,4,4,8,16]}>
        <Center py={[5,10,20,30, 75]} className="perspective">
            {jsx[state.currentElement]}
        </Center>
        <button onClick={dispatch} className="action-button p-4 float-right">Dalej</button>  
    </Box>
  )
}