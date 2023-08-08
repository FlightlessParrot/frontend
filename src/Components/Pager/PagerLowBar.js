import { Flex } from "@chakra-ui/react";
import PagerNumber from "./PagerNumber";
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export default function PagerLowBar({pagesNumbersArray,currentNumber, dispatch}) {
   
    const numbers=pagesNumbersArray.map((e,i)=>{
        return <PagerNumber key={i} onClick={()=>dispatch(e)} currentNumber={e===currentNumber}>
            {e}
        </PagerNumber>
    })
  return (
    <Flex >
        
        <PagerNumber dataTestId='first' onClick={()=>dispatch('first')}><ArrowLeftIcon /></PagerNumber>
        <PagerNumber dataTestId='back' onClick={()=>dispatch('back')}><ChevronLeftIcon /></PagerNumber>
            {numbers}
        <PagerNumber  dataTestId='next' onClick={()=>dispatch('next')}><ChevronRightIcon /></PagerNumber>
        <PagerNumber dataTestId='last' onClick={()=>dispatch('last')}><ArrowRightIcon /></PagerNumber>
    </Flex>
  )
}