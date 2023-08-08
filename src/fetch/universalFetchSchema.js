import { redirect } from "react-router-dom";
import getCSRFToken from "../cookies/getCSRFToken";

export default async function universalFetchSchema(
  request=null,
  fetchUrl,
  method = "post",
  redirectLocation= '/login',
  needData =false
) {
  const token = await getCSRFToken();
  const body = request && await request.formData();
  const url = process.env.REACT_APP_BACKEND + fetchUrl;
  const option = {
    method: method,
    credentials: "include",
    headers: { "X-XSRF-TOKEN": token, 'Accept': "application/json" },
  };
  if(request){option['body']=body;}  
  try {
    const response = await fetch(url, option);
    console.log(response.status);

    if (response.status === 419) {
      await getCSRFToken(true);
      return redirect('/login')
    }
    if(response.status === 302) {
      
      return redirect(redirectLocation)
    }
    const wasSuccesful=response.status < 300 ? true : false;
    const data= needData && response.status===200  ? response.json() : []
    return   needData ? data :wasSuccesful;
  } catch (e) {
    console.log(e);
    return false;
  }
}

