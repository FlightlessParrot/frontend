import universalFetchSchema from "../universalFetchSchema"


export default async function getAdressLoader() {
    const response=await universalFetchSchema(null,'/account/data','get', '/login',true)
  return response 
}