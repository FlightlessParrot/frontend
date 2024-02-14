import universalFetchSchema from "../universalFetchSchema";

export default async function editUndercategoryAction({params, request})
{
    const response = await universalFetchSchema(request,'/undercategory/'+params.undercategoryId,'post','/login', true);

    return response?.isSuccessful ? response.isSuccessful : false
}