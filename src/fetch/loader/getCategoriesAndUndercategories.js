import universalFetchSchema from "../universalFetchSchema"

export default async function getCategoriesAndUndercategories() {
    const response=await universalFetchSchema(null,'/categories/all/undercategories/all','get','',true)

  return response
}