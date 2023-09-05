import universalFetchSchema from "../universalFetchSchema"

export default async function getLatestTest() {
    const response = await universalFetchSchema(null,'/test/custom/latest/get','get','',true)
  return response
}