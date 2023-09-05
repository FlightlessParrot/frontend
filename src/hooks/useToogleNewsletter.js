import { useToast } from "@chakra-ui/react"
import universalFetchSchema from "../fetch/universalFetchSchema"
import useShowToast from "./useShowToast"

export default  function useToogleNewsletter() {
    const toast=useShowToast()
    const toggler=async (revalidator)=>{
        const response=await universalFetchSchema(null,'/account/newsletter/toggle','put');
        revalidator.revalidate()
        if(response)
        {
            toast(
                {
                    title: 'Sukcess',
                    description: 'Udało się zmienić ustawienia newslettera.',
                    status:'success'
                }
            )
        }else{
            toast(
                {title: 'Błąs',
                    description: 'Nie udało się zmienić ustawień newslettera.',
                    status:'error'}
                    );
        }
        
    }
    return toggler
}