import { getAllCookies } from "./getAllCookies";
import { getCookie } from "./getCookie";
export default async function getCSRFToken(force=false) {

  if (!getAllCookies().hasOwnProperty("XSRF-TOKEN") || force) {
    try {
       await fetch(
        process.env.REACT_APP_BACKEND + "/sanctum/csrf-cookie",
        {
          method: "get",
          credentials: "include",
        }
      );
   
    console.log('regenerating token')
    } catch (e) {
      console.log(e);
      return false;
    }
  }
const token = decodeURIComponent(getCookie("XSRF-TOKEN"));
  return token;
}


