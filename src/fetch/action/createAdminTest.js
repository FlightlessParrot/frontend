import getCSRFToken from "../../cookies/getCSRFToken";
import universalFetchSchema from "../universalFetchSchema"

export default async function createAdminTest({params, request}) {
    
    const clone=request.clone()
    const formData=await request.formData();
    
    const subscriptionId=formData.get('subscription')
    const file=formData.get('image')
    const response = await universalFetchSchema(clone, `/subscription/${subscriptionId}/test/create`,'post','/login',true)
 
    if(file)
    {
      
        formData.append('_method','put');
        await fetch(process.env.REACT_APP_BACKEND+`/test/${response.test}/image/add`,{
            method: 'post',
            credentials: "include",
            headers: { "X-XSRF-TOKEN": await getCSRFToken(), 'Accept': "application/json" },
            body: formData
        } )
  
    }
    return response.test !=undefined
}