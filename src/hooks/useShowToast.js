import { useToast } from "@chakra-ui/react"
import { useCallback } from "react"

export default function useShowToast() {
    const toast=useToast()
    const rememberedToast=useCallback(
      ({title, description, status='success'})=>{toast({
    title: title,
    description:description,
    status: status,
    duration: 9000,
    isClosable: true,
  })}
  
  ,[toast]
    )
    

  return rememberedToast
}