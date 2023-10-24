import universalFetchSchema from "../universalFetchSchema"

export default async function getAdminFlashcardsLoader() {
    //const unactiveSubscriptionsResponse = await universalFetchSchema(null,'/subscriptions/inactive','get','/login',true)
    const subscriptions = await universalFetchSchema(null,'/subscriptions/all','get', '/login',true)
  return {...subscriptions}
}