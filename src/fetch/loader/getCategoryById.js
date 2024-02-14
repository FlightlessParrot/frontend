import { redirect } from "react-router-dom";
import universalFetchSchema from "../universalFetchSchema";

export default async function getCategoryById({params})
{
   const response = await universalFetchSchema(null,'/category/'+params.categoryId,'get','/login',true);

    return response?.category ? response : redirect('/user/admin/categories')
}