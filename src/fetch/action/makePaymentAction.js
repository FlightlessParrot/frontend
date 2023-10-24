

import { redirect } from "react-router-dom";
import universalFetchSchema from "../universalFetchSchema";

export default async function makePayment({params, request})
{
    const response=await universalFetchSchema(request,'/payments/subscription/'+params.subscription, 'post','/login',true)

    const action = response?.redirectUrl ? redirect(response.redirectUrl ) : {error: true}
    console.log(response)
    return action
    
}