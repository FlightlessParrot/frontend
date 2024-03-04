import { useCallback } from "react";
import getCSRFToken from "../cookies/getCSRFToken";

export default function useAttachFileToQuestion() { 
    
  const sendFile =useCallback( async (fileRef, questionId) => {
   const token = await getCSRFToken();
   console.error(fileRef.current.files[0])
    if (fileRef.current.files.length>0) {
      const formData = new FormData();
      formData.append('image',fileRef.current.files[0])
      formData.append('_method','put')
      const response = await fetch(
        process.env.REACT_APP_BACKEND + `/question/${questionId}/image/add`,
        { method: 'post',
        credentials: 'include',
        headers: { "X-XSRF-TOKEN": token, 'Accept': "application/json"},
        body: formData} 
      );  
      const path=await response.json()
     console.log(path)
     console.error('I work')
     return path
    }else {
      return 'Brak zdjęcia'
    }
    
  },[]);
  return sendFile;
}
