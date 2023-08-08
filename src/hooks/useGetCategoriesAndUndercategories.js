import universalFetchSchema from "../fetch/universalFetchSchema"

export default function useGetCategoriesAndUndercategories({testId, setResponse}) {

   const getData=async ()=>{

   const categoriesResponse = await universalFetchSchema(null,`/tests/${testId}/categories`,'get','/login',true)
    const category=!categoriesResponse?.categories ? {categories: []}: categoriesResponse;
    const undercategoriesResponse = await universalFetchSchema(null,`/tests/${testId}/undercategories`,'get','/login',true)
    const undercategory=!undercategoriesResponse?.undercategories ? {undercategories: []}: undercategoriesResponse;
  setResponse({...category,...undercategory})
   }
   return ()=>getData()
}   