import universalFetchSchema from "../universalFetchSchema"

export default async function updateSubscription({params, request}) {
    const response=await universalFetchSchema(request,`/subscription/${params.subscription}/update`,'post','',true)
  return response?.subscription ? response: {error: true}
  
}