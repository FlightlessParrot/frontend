import universalFetchSchema from "../fetch/universalFetchSchema"


export default function useRemoveFromStatystics() {
    
    const remover=async (testId,questionId, setResponseOk)=>{
        const response= await universalFetchSchema(
            null, `/generated-test/${testId}/question/${questionId}/statistics/remove`,'put','/login', false)
        setResponseOk(response)
    }

  return (testId,questionId,setResponseOk)=>remover(testId,questionId, setResponseOk)
}