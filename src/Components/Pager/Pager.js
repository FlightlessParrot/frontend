
import { Stack } from "@chakra-ui/react"
import usePagerController from "../../hooks/usePagerController"
import useReturnNumberWithFriends from "../../hooks/useReturnNumberWithFriends"
import PagerLowBar from "./PagerLowBar"

export default function Pager({blocks, howManyPerPage}) {

   const [state, dispatch]=usePagerController(blocks, howManyPerPage)
   const getPagesArray=()=>{
    let i=1
    let array=[]
    do{
        array.push(i)
        i++
        
    }while(i<state.howManyPages)
    return array
   }
   const pagesArray=getPagesArray()

   const lowBarNumbers=useReturnNumberWithFriends({numbersArray: pagesArray, currentNumber: state.currentPage, howManyFriends:6 })


  return (
    <Stack>
        {state.elements}
      <PagerLowBar pagesNumbersArray={lowBarNumbers} currentNumber={state.currentPage} dispatch={dispatch} />
    </Stack> 
  )
}  
