import universalFetchSchema from "../universalFetchSchema"

export default async function getAdminSubscriptionsLoader() {
    const unactiveSubscriptionsResponse = await universalFetchSchema(null,'/subscriptions/inactive','get','/login',true)
    const allActiveSubscriptions = await universalFetchSchema(null,'/subscriptions','get', '/login',true)
  return {...unactiveSubscriptionsResponse, ...allActiveSubscriptions}
}