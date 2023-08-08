import universalFetchSchema from '../universalFetchSchema'
export default async function solveTestLoader({params}) {
 
   const response = await universalFetchSchema(null,`/generated-tests/${params.generatedTestId}/view`,'get', '/login', true);
   return response
}