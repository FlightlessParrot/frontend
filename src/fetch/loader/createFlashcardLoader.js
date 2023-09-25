import universalFetchSchema from "../universalFetchSchema"


export default async function createFlashcardLoader() {
    const response=await universalFetchSchema(null,'/categories/all/undercategories/all','get','',true)
    const secResponse=await universalFetchSchema(null,'/subscriptions','get','/login',true)
  return {...response, ...secResponse}
}