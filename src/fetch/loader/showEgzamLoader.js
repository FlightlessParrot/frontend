import universalFetchSchema from "../universalFetchSchema"

export default async function showEgzamLoader({params}) {
    const {teamId, testId}=params
    const response = await universalFetchSchema(null,`/teams/${teamId}/tests/${testId}/results`,'get','/login',true);
    console.log(response)
  return response?.results ? response : {results: [], headers:{}};
}