import universalFetchSchema from "../universalFetchSchema"

export default async function getAllCodesLoader() {
    const response= await universalFetchSchema(null,'/discount-codes','get','/',true)
  return response
}