
import { Flex} from "@chakra-ui/react"
import usePagerController from "../../hooks/usePagerController"
import useReturnNumberWithFriends from "../../hooks/useReturnNumberWithFriends"
import PagerLowBar from "./PagerLowBar"
import { useEffect } from "react"

export default function Pager({blocks, howManyPerPage, wrap=false}) {

   const [state, dispatch]=usePagerController(blocks, howManyPerPage)
   const getPagesArray=()=>{
    let i=1
    let array=[]
    do{
        array.push(i)
        i++
        
    }while(i<=state.howManyPages)
    return array
   }
   useEffect(
    ()=>{
      dispatch({
        reset: true,
        blocks: blocks,
        howManyPerPage:howManyPerPage
      })
    },[blocks]
   )
   const pagesArray=getPagesArray()

   const lowBarNumbers=useReturnNumberWithFriends({numbersArray: pagesArray, currentNumber: state.currentPage, howManyFriends:6 })


  return (
    <Flex align={'center'} direction={'column'} pb={[2,4,8,16]} >
        <Flex align={wrap ? 'stretch':'center' } direction={wrap ? 'row': 'column' } wrap={wrap? 'wrap': 'nowrap'}  p={[2,4,8,16]} gap={10}>
          {state.elements}
        </Flex>
      <PagerLowBar pagesNumbersArray={lowBarNumbers} currentNumber={state.currentPage} dispatch={dispatch} />
    </Flex> 
  )
}  
