import universalFetchSchema from "../universalFetchSchema"

export default async function modifyQuestionLoader({params}) {
    const categoriesAndUndercategories=await universalFetchSchema(null,'/categories/all/undercategories/all','get','',true)
    const question= await universalFetchSchema(null, '/questions/'+params.questionId,'get','/login', true)
  return {...categoriesAndUndercategories, ...question}
}