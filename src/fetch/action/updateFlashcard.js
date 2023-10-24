import getCSRFToken from "../../cookies/getCSRFToken";


export default async function updateFlashcard({params, request}) {

    const formData=await request.formData();
    const image=formData.get('image')

    formData.delete('image')

    const imageController=image!==null
    
    const newFormData=new FormData()
    newFormData.append('image', image)
    newFormData.append('_method', 'put')
    const token = await getCSRFToken();
    
    const response= await fetch(
        process.env.REACT_APP_BACKEND+`/flashcard/${params.flashcard}/update`,{
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