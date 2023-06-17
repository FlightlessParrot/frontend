
import universalFetchSchema from "../universalFetchSchema";

export default async function registerAction({params, request})
{
  
    return universalFetchSchema(request, '/register','post','/user')
}