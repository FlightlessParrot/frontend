import { redirect } from "react-router-dom";
import getCSRFToken from "../cookies/getCSRFToken";

export default async function universalFetchSchema(
  request,
  fetchUrl,
  method = "post",
  redirectLocation= '/login'
) {
  const token = await getCSRFToken();
  const body = await request.formData();
  const url = process.env.REACT_APP_BACKEND + fetchUrl;
  const option = {
    method: method,
    credentials: "include",

    body: body,
    headers: { "X-XSRF-TOKEN": token, Accept: "application/json" },
  };
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
    return response.status < 300 ? true : false;
  } catch (e) {
    console.log(e);
    return false;
  }
}

