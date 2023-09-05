import universalFetchSchema from "../universalFetchSchema"

export default async function testReviewLoader({params}) {

  const response=await universalFetchSchema(null,`/generated-tests/${params.generatedTestId}/answers`,'get','/login', true)
  console.log(response)
  return  response?.correct ? {...response, testId:params.generatedTestId} : {correct:[],testId:params.generatedTestId}
}