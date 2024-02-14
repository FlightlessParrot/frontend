import universalFetchSchema from "../universalFetchSchema";

export default async function editCategoryAction({params, request})
{
    const response = await universalFetchSchema(request,'/category/'+params.categoryId,'post','/login', true);

    return response?.isSuccessful ? response.isSuccessful : false
}