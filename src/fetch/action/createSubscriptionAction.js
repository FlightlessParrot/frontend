import universalFetchSchema from "../universalFetchSchema"

export default async function createSubscriptionAction({request}) {
    const response=await universalFetchSchema(request,'/subscription/create','post');
  return response
}