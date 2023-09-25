import getCSRFToken from "../../cookies/getCSRFToken";
import universalFetchSchema from "../universalFetchSchema"

export default async function createFlashcard({params, request}) {

    const formData=await request.formData();
    const image=formData.get('image')
    const subscription=formData.get('subscription')
    formData.delete('image')
    formData.delete('subscription')
    const imageController=image!==null
    console.log(image)
    const newFormData=new FormData()
    newFormData.append('image', image)
    newFormData.append('_method', 'put')
    const token = await getCSRFToken();
    
    const response= await fetch(
        process.env.REACT_APP_BACKEND+`/subscription/${subscription}/flashcard/new`,{
            method: 'post',
            credentials:'include',
            headers: {
               "X-XSRF-TOKEN": token, 'Accept': "application/json" ,
            },
            body: formData
        }
    )
    let data={}
    if(response.ok)
    {
        data=await response.json()
    }else
      {
        return {flashcard: 'error', image: 'error'}
      }
      if(imageController)
      {
        const secResponse=await fetch( process.env.REACT_APP_BACKEND+`/flashcards/${data.flashcard.id}/image/update`,
    {
        method: 'post',
        credentials:'include',
        headers: {
           "X-XSRF-TOKEN": token, 'Accept': "application/json" ,
        },
        body: newFormData
    }
    )
    if(secResponse.ok)
    {
        const imageResponse=await secResponse.json();
        data={...data,...imageResponse}
    }
    else{
        data={...data, image: 'error'}
    }


      }
    
   
  return data
}