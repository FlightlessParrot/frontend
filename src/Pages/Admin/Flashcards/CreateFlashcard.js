import {Box } from "@chakra-ui/react";
import useShowToast from '../../../hooks/useShowToast'
import Title from "../../../Components/Title";

import { useActionData} from "react-router-dom";

import { useEffect } from "react";

import FlashcardCreationForm from "../../../Components/Forms/FlashcardCreationForm";

export default function CreateFlashcard() {


    const toast=useShowToast()
 

    const actionData=useActionData()


 
    useEffect(
        ()=>{
            if( actionData?.flashcard)
            {
                if(actionData.flashcard==='error')
                {
                    toast({
                        title: 'Nie stworzono fiszki',
                        description: "Nie udało się utworzyć fiszki",
                        status: 'error'
                    })
                }else{
                    toast({
                        title: 'Stworzono fiszkę',
                        description: "Fiszka została stworzona",
                        status: 'success'
                    })

                }
            }
        },[actionData?.flashcard]
    )

    useEffect(
        ()=>{
            if(actionData?.image)
            {
                if(actionData.image==='error')
                {
                    toast({
                        title: 'Nie dodano ilustracji do fiszki',
                        description: "Nie udało się dodać ilustracji do utworzonej fiszki.",
                        status: 'error'
                    })
                }else{
                    toast({
                        title: 'Dodanop ilustrację',
                        description: "Ilustracja została dodana do fiszki.",
                        status: 'success'
                    })
                }
            }
        },[actionData?.image]
    )

   

  return (
    <div>
        <Title title='Stwórz fiszkę' />
        <Box padding={[2,4,4,8,16]}>
            <FlashcardCreationForm />
         
        </Box>
    
    </div>
  )
}