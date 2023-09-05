import universalFetchSchema from "../universalFetchSchema"

export default async function updatePasswordAction({params, request}) {

    const response=await universalFetchSchema(request,'/user/password/update','post','/login')
  return response
}