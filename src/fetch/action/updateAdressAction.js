import getCSRFToken from "../../cookies/getCSRFToken"

export default async function updateAdressAction({request}) {
    const token=await getCSRFToken()
    const formData=await request.formData()
    formData.append('_method','PUT')
  const response=await fetch(process.env.REACT_APP_BACKEND+'/account/data/update',{
    method: 'post',
    credentials: "include",
    headers: { "X-XSRF-TOKEN": token, 'Accept': "application/json" },
    body: formData
  }

  )
  console.log(response)
  return {ok: response.ok, 'status': response.status}
}