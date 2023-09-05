import universalFetchSchema from "../universalFetchSchema"

export default async function notyficationsLoader() {
const response = await universalFetchSchema(null,`/notyfications`,'get', '/login', true)
console.log(response)
  return Array.isArray(response.notyfications) ? response : {notyfications: []};
}