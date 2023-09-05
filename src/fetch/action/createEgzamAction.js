import universalFetchSchema from "../universalFetchSchema"

export default async function createEgzamAction({params, request}) {
    const secRequest=request.clone()
    const test= await universalFetchSchema(request,'/generate-test','post', '/login',true );
    const egzam = await universalFetchSchema(secRequest,`/teams/${params.teamId}/generated-tests/${test.test}/egzam/create`, 'post', '/login',true );
    const deleteGen= await universalFetchSchema(null, `/generated-tests/${test.test}`,'delete', '/login')
  return egzam.testId  ? {status: 'success',title:'Sukces', description:'Udało się utworzyć egzamin.', testId: egzam.testId}: {status: 'error',title:'Błąd', description:'Nie udało się utworzyć egzaminu.'}; 
}