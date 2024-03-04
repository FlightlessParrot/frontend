import { Button, useBoolean, Box, Stack } from "@chakra-ui/react"
import GiveExplanation from "./GiveExplanation"
import { useLoaderData } from "react-router-dom"
import { useEffect } from "react"

export default function LastPage({value, onChange, setSendData}) {
    const [flag, setFlag]=useBoolean(false)
    const loaderData=useLoaderData()

    useEffect(
      ()=>{
        if(loaderData.question?.explanation && loaderData.question.explanation!==null)
        {
          setFlag.on()
        }else{
          setFlag.off()
        }
      },[loaderData,setFlag]
    )
  return (
    <Box >
        <strong className="bold-serif text-2xl block my-8">Pytanie jest gotowe do utworzenia</strong>
         <div className="my-16">{flag ? <GiveExplanation value={value} onChange={onChange} closeFn={setFlag.off}/>:
            <>
            <p>Możesz dodać do pytania wyjaśnienie udzielonej odpowiedzi.</p>
            <button className="action-button" onClick={setFlag.on}>Wyjaśnij</button>
            </>
            
        }</div> 
  
       <Stack><Button m={8} colorScheme="green" onClick={setSendData.on}>Stwórz pytanie</Button></Stack> 
    </Box>
  )
}