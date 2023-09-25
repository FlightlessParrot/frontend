import universalFetchSchema from "../universalFetchSchema"

export default async function deleteCategoryOrUndercategory({params,request}) {
     
     const formData=await request.formData()
  
    const cat=formData.get('categories[]')
    const und=formData.get('undercategories[]')
    const url= cat? `/categories/${cat}/delete` : `/undercategories/${und}/delete`
   
const response = await universalFetchSchema(null,url,'delete','',true )
  return response.category || response.undercategory ? response : {error: true}
}