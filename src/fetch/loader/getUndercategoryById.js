import { redirect } from "react-router-dom";
import universalFetchSchema from "../universalFetchSchema";

export default async function getCategoryById({params})
{
   const response = await universalFetchSchema(null,'/undercategory/'+params.undercategoryId,'get','/login',true);
   const cat = await universalFetchSchema(null,'/categories/all/undercategories/all','get','/login',true)
    return response?.undercategory ? {...response, ...cat} : redirect('/user/admin/categories')
}