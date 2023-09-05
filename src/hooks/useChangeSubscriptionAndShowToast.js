import { useCallback } from "react"
import useShowToast from "./useShowToast"
import universalFetchSchema from "../fetch/universalFetchSchema";

export default function useChangeSubscriptionAndShowToast() {
    const toast=useShowToast();
    const changeSubscription=useCallback(
       async (testId, subscriptionId)=>{
        const response=await universalFetchSchema(null,`/subscription/${subscriptionId}/test/${testId}/update`,'put')
        
        if(response)
        {
            toast(
                {
                    title: 'Udało się!',
                    description: 'Pakiet przypisano do nowej subskrypcji.',
                    status:'success'
                }
            )
        }else{
            toast(
                {
                    title: 'Błąd!',
                    description: 'Nie udało się zmienić subskrypcję.',
                    status:'error'
                }
            )
              }
        },[toast])

  return changeSubscription
}