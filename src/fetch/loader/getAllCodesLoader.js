import universalFetchSchema from "../universalFetchSchema"

export default async function getAllCodesLoader() {
    const response= await universalFetchSchema(null,'/discount-codes','get','/',true)
    const subscriptions =await universalFetchSchema(null,'/subscriptions/all','get', '/login',true)
  return {...response, ...subscriptions}
}