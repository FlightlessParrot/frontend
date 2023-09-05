import { Box, Wrap } from "@chakra-ui/react";
import { useLoaderData, useRevalidator } from "react-router-dom";
import ProductCard from "../Cards/ProductCard";
import { useEffect, useState } from "react";
import useActivateSubscriptionAndShowToast from "../../hooks/useActivateSubscriptionAndShowToast";
import useDisactivateSubscriptionAndShowToast from "../../hooks/useDisactivateSubscriptionAndShowToast";

export default function ActivateOrDisactivateSubscriptions({activateComponent}) {

    const loaderData=useLoaderData()
    const [chosenSub, setChosenSub]=useState();
    const activate=useActivateSubscriptionAndShowToast()
    const disactivate=useDisactivateSubscriptionAndShowToast()
    const revalidate=useRevalidator()
    const key=activateComponent ? 'unactiveSubscriptions' : 'subscriptions'
    const jsx=loaderData[key].map(
        (e)=><ProductCard key={e.id} {...e} buttonText={activateComponent ? "Aktywuj":"Zdezaktywuj"} OnClickReturnId={setChosenSub} />
        
    )


    useEffect(
        ()=>{   
            if(chosenSub)
            {
                if(activateComponent)
                {
                    activate(chosenSub);
                }else{
                    disactivate(chosenSub);
                }
                
                setChosenSub(null)
                revalidate.revalidate()
            }
        },[chosenSub, revalidate, activate, disactivate, activateComponent]
    )

  return <Box my={[4,8,16]}>
    <h2 className="lead block pb-16 pt-20">Aktywuj subskrypcje</h2>
    <Wrap spacing={'25px'} justify={['center','start']}>
        {jsx}
    </Wrap>
  </Box> 

}