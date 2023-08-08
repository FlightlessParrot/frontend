import getCSRFToken from "../../cookies/getCSRFToken"

export default async function getCustomTestLoader() {
    const token = await getCSRFToken();
    const response= await fetch(process.env.REACT_APP_BACKEND+'/tests/find',
    {
        method: 'post',
        credentials: "include",
        headers: { "X-XSRF-TOKEN": token, 'Accept': "application/json" },
        body: JSON.stringify({custom:true})
    }
    
    )
    
  return response.ok ? response : []
}