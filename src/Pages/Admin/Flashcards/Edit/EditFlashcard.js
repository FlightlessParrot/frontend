import { Button } from "@chakra-ui/react"
import DataLayout from "../../../../Components/Data/DataLayout"
import FlashcardCreationForm from "../../../../Components/Forms/FlashcardCreationForm"
import { useState, useEffect } from "react"
import { useActionData, useLoaderData, useNavigate } from "react-router-dom"
import useShowToast from "../../../../hooks/useShowToast"
import universalFetchSchema from "../../../../fetch/universalFetchSchema";
export default function EditFlashcard() {
    const [removeId, setRemoveId]=useState(null)
    const loaderData=useLoaderData()
    const toast=useShowToast()
    const navigate=useNavigate()

    const actionData=useActionData()


 
    useEffect(
        ()=>{
            if( actionData?.flashcard)
            {
                if(actionData.flashcard==='error')
                {
                    toast({
                        title: 'Nie zmieniono fiszki',
                        description: "Nie udało się zmienić fiszki",
                        status: 'error'
                    })
                }else{
                    toast({
                        title: 'Zmieniono fiszkę',
                        description: "Fiszka została zmieniona",
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
                        description: "Nie udało się dodać ilustracji do fiszki.",
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
    useEffect(
        ()=>{
          const deleteFn=async ()=>{
            const url='/flashcards/'+removeId+'/delete'
            const response =await universalFetchSchema(null,url,'delete');
            if(response)
            {
              toast({title:'Udało się',
              description: 'Element został usunięty',
              status: 'success'
    
              })
            }else{
              toast({title:'Błąd',
              description: 'Element nie został usunięty',
              status: 'error'
    
              })
            }
            
             setRemoveId(null)
            navigate('/user/admin/flashcards/edit')
          }
          if(removeId)
          {
            deleteFn()
          }
        },[removeId, setRemoveId, removeId,toast,navigate ]
      )
  return (
    <DataLayout>
        <FlashcardCreationForm edit/>
        <Button colorScheme="red"  onClick={event=>setRemoveId(loaderData.flashcard.id)} >Usuń</Button>
    </DataLayout>
  )
}