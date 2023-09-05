import universalFetchSchema from "../universalFetchSchema"


export default async function adminTestSettingsLoader({params}) {
    const subscriptions=await universalFetchSchema(null,'/subscriptions/all','get','/login',true)
    const test=await universalFetchSchema(null,`/test/${params.testId}`,'get','/login',true)
    const categories=await universalFetchSchema(null,'/categories/all/undercategories/all','get','/login',true)
  return{...subscriptions, ...test, ...categories}
}