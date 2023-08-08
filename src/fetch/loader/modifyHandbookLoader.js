import universalFetchSchema from "../universalFetchSchema"

export default async function modifyHandbookLoader({params}) {
const response = await universalFetchSchema(null,`/teams/${params.team}/tests/view`,'get', '/login', true)
  const materials=Array.isArray(response) ? response : [];
  return {teamId: params.team, tests: materials}
}