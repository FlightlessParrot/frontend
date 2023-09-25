import universalFetchSchema from "../universalFetchSchema"

export default async function createNewCategoryOrUndercategory({params, request}) {
    const clone=request.clone()
    const formData=await clone.formData()
  
    const type=formData.get('type')
    const response=await universalFetchSchema(request,`/${type}/new`, 'post','/login',true)
  return response.category || response.undercategory ? response : {error: true}
}