import { useCallback } from "react";
import getCSRFToken from "../cookies/getCSRFToken";

export default function useAttachFileToQuestion() { 
    
  const sendFile =useCallback( async (fileRef, questionId) => {
   const token = await getCSRFToken();
    if (fileRef.current.files.length) {
      const formData = new FormData();
      formData.append('image',fileRef.current.files[0])
      formData.append('_method','put')
       await fetch(
        process.env.REACT_APP_BACKEND + `/question/${questionId}/image/add`,
        { method: 'post',
        credentials: 'include',
        headers: { "X-XSRF-TOKEN": token, 'Accept': "application/json",  },
        body: formData} 
      );  
     
    }
  
  },[]);
  return sendFile;
}
