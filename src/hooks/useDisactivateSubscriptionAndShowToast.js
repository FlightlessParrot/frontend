import { useCallback } from "react"
import universalFetchSchema from "../fetch/universalFetchSchema"

import useShowToast from "./useShowToast"

export default function useDisactivateSubscriptionAndShowToast() {
    const toast=useShowToast()
    const disactivate=useCallback(
        async (id)=>{
             const response=await universalFetchSchema(
                null, `/subscription/${id}/disactivate`, 'put', '/login', false
        )
            if(response)
            {
                toast(
                    {
                        title: 'Udało się!',
                        description: 'Subskrypcja została zdezaktywowana.',
                        status:'success'
                    }
                )
            }else{
                toast(
                    {
                        title: 'Błąd!',
                        description: 'Subskrypcja jest nadal aktywna.',
                        status:'error'
                    }
                )
            }
        },[toast]);
   

  return disactivate
}
  