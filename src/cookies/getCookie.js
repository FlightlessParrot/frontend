import { getAllCookies } from "./getAllCookies";

export function getCookie(cookieName) {
    let cookie = getAllCookies();
  
    return cookie[cookieName];
  }
  