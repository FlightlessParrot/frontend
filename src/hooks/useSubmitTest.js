
import getCSRFToken from "../cookies/getCSRFToken";

export default function useSubmitTest(object, additionalData, generatedTestId)
{
  const data={
    answers:object,
    additionalData: additionalData
  }

  const json=JSON.stringify(data)

  return async ()=>await postDataToServer(json,  `/generated-tests/${generatedTestId}/submit`)

      
}

async function postDataToServer(jsonData, url )
{
  const token=await getCSRFToken()
  try{
const response= await fetch(process.env.REACT_APP_BACKEND+url,{
  method: 'post',
  credentials: 'include',
  headers: {
     "X-XSRF-TOKEN": token, 'Accept': "application/json" , 'Content-Type': 'application/json'
  },
  body: jsonData
  
})
if(response.ok)
{
  return true
}else{
  throw new Error('Response is not okey')
}

}catch(e)
{
  console.log(e)
  return false
}


}