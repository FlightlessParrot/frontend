import universalFetchSchema from "../universalFetchSchema"

export default async function flashcardsAction({ params, request}) {

    const response= await universalFetchSchema(request,'/flashcards/view','post','/login',true)
    
    return response
}