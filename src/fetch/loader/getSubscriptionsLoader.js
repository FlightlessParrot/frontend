import universalFetchSchema from "../universalFetchSchema"

export default async function getSubscriptionsLoader() {
    const response=await universalFetchSchema(null,'/subscriptions','get','/login',true)
  return response;
}