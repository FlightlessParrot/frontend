import { redirect } from "react-router-dom";
import universalFetchSchema from "../universalFetchSchema"

export default async function createTestAction({params, request}) {
   const response= await universalFetchSchema(request,'/generate-test','post', '/login',true );

  return  response?.test ? redirect(`/user/test/${response.test}`): response;
}

export async function createCustomTestAction({params, request})
{
  const response=await universalFetchSchema(request,'/tests/create')
  return response;
}