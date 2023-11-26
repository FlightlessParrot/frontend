import { Stack, Box } from "@chakra-ui/react"
import { useEffect } from "react"


import OrderInput from "./OrderInput"
import useControlOrderInput from "../../../hooks/WriteAnswersHooks/useControlOrderInput"
import { useLoaderData } from "react-router-dom"

export default function CreateOrder({howMany, setAnswers, controler, setControler}) {
    const loaderData=useLoaderData()
    const answers=[]
    const [order,dispatchOrder]=useControlOrderInput(howMany)
    useEffect(
        ()=>{
            dispatchOrder({reset: howMany})                
        },[howMany, dispatchOrder])
    useEffect(
        ()=>{
            
            setAnswers({
                type: 'order',
                answers:order
            })
        },[order, setAnswers]
    )
    useEffect(
        ()=>{
            if(loaderData?.question && controler.order)
            {
                setControler(s=>({...s, order: false}))
                dispatchOrder({edit: loaderData.question.squares})
            }
        },[loaderData, dispatchOrder, controler, setControler])
    for(let i=0;i<order.length;i++)
    {
        answers.push(<OrderInput key={i} value={order[i]} onChange={dispatchOrder} name={'order-'+i} order={i+1}/>)
    }
  return (
    <Box>
        <i className="block my-12">Utwórz odpowiedzi i ich kolejność. Liczba przed odpowiedzią oznacza kolejność elementu.</i> 
    <Stack spacing={'30px'}>   
        {answers}
    </Stack>

    </Box>
  )
}
  