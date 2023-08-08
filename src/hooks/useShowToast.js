import { useToast } from "@chakra-ui/react"

export default function useShowToast() {
    const toast=useToast()
      
    

  return ({title, description, status='success'})=>toast({
    title: title,
    description:description,
    status: status,
    duration: 9000,
    isClosable: true,
  })
}