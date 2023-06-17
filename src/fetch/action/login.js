

import universalFetchSchema from "../universalFetchSchema";

export default async function loginAction({params, request})
{

    return universalFetchSchema(request,'/login', 'post')
    
}