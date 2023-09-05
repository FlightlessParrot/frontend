import { useCallback } from "react"
import universalFetchSchema from "../fetch/universalFetchSchema"

import useShowToast from "./useShowToast"

export default function useActivateSubscriptionAndShowToast() {
    const toast=useShowToast()
    const activate=useCallback(
        async (id)=>{
             const response=await universalFetchSchema(null,
        `/subscription/${id}/activate`, 'put', '/login', false
        )
            if(response)
            {
                toast(
                    {
                        title: 'Udało się!',
                        description: 'Subskrypcja została aktywowana. Teraz użytkownicy mogą z niej korzystać.',
                        status:'success'
                    }
                )
            }else{
                toast(
                    {
                        title: 'Błąd!',
                        description: 'Subskrypcja nie została aktywowana.',
                        status:'error'
                    }
                )
            }
        },[toast]

    )
   

  return activate
}