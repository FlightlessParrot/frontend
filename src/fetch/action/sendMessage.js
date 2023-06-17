import getCSRFToken from "../../cookies/getCSRFToken";

export default async function sendMessageAction({ params, request }) {
  const token = await getCSRFToken();
  const body = await request.formData();
  try {
    const response = await fetch(
      process.env.REACT_APP_BACKEND + "/message/type/default",
      {
        method: "post",
        credentials: "include",
        body: body,
        headers: { "X-XSRF-TOKEN": token },
      }
    );

    return response.status < 300 ? true : false;
  } catch (e) {
    console.log(e);
    return false;
  }
}
