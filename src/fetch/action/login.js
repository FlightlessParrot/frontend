

import universalFetchSchema from "../universalFetchSchema";

export default async function loginAction({params, request})
{

    const response=await universalFetchSchema(request,'/login', 'post')
    return response
}