import universalFetchSchema from "../universalFetchSchema"

export default async function getSubscriptionsForGuestLoader() {

    const response=await universalFetchSchema(null,'/guest/subscriptions','get','/login',true)
  return response
}