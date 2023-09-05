import universalFetchSchema from "../universalFetchSchema"

export default async function createOpenQuestionAction({request, params}) {
    const {teamId, testId}=params
   const response =await universalFetchSchema(request,`/teams/${teamId}/egzams/${testId}/question/create`,'post','/login',true) 
   console.log(response)
   console.log('hardwork')
  return response
}