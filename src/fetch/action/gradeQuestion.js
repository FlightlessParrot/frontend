
import universalFetchSchema from "../universalFetchSchema"
export default async function gradeQuestion({params, request}) {
  
   const response= await universalFetchSchema(request,`open-answers/${openAnswerId}/grade`,'post', '/notyfications',true );

  return  response;
}

