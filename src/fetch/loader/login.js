import { redirect } from "react-router-dom";
import getCSRFToken from "../../cookies/getCSRFToken";

export default async function loginloader()
{
  const token = await getCSRFToken();

  try {
    const url = process.env.REACT_APP_BACKEND + "/checkAuth";
    const response = await fetch(url, {
      method: "get",
      credentials: "include",
      headers: { "X-XSRF-TOKEN": token, 'Accept': "application/json" },
    });
    if(response.status===419)
    {
      await getCSRFToken(true);

    };
    
    return response.status ===204 ? redirect('/user') : false;
  } catch (e) {
    console.log(e);
    return false;
  }
}
