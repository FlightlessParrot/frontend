import universalFetchSchema from "../universalFetchSchema"

export default async function adminTestLoader() {
    const tests=await universalFetchSchema(null,'/tests/all','get','/login',true);
    const subscriptions=await universalFetchSchema(null,'/subscriptions/all','get','/login',true)
  return {...tests, ...subscriptions}
}