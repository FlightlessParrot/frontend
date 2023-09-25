import universalFetchSchema from "../universalFetchSchema"

export default async function getSubscription({params}) {
    const response = await universalFetchSchema(null,'/subscription/'+params.subscription,'get','/',true)
  return response
}