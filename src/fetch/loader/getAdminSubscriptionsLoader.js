import universalFetchSchema from "../universalFetchSchema"

export default async function getAdminSubscriptionsLoader() {
    const unactiveSubscriptionsResponse = await universalFetchSchema(null,'/subscriptions/inactive','get','/login',true)
    const subscriptions = await universalFetchSchema(null,'/subscriptions/active','get', '/login',true)
  return {...unactiveSubscriptionsResponse, ...subscriptions}
}