import universalFetchSchema from "../universalFetchSchema"


export default async function editFlashcardLoader({params}) {
    const response=await universalFetchSchema(null,'/categories/all/undercategories/all','get','',true)
    const secResponse=await universalFetchSchema(null,'/subscriptions/all','get','/login',true)
    const flashcard = await universalFetchSchema(null,'/flashcard/'+params.flashcard,'get','/login',true)
  return {...response, ...secResponse,...flashcard}
}