import { redirect } from "react-router-dom";
import getCSRFToken from "../../cookies/getCSRFToken";

export default async function checkIfAuth() {
  const token = await getCSRFToken();

  const url = process.env.REACT_APP_BACKEND + "/checkAuth";
  const option = {
    method: "get",
    credentials: 'include',
    headers: { "X-XSRF-TOKEN": token, Accept: "application/json" },
  };
  const response = await fetch(url, option);

  return response.status === 204 ? true : redirect("/login");
}
