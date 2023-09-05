import { redirect } from "react-router-dom"
import universalFetchSchema from "../universalFetchSchema"

export default async function getOpenQuestionToGrade({params}) {
    const response=await universalFetchSchema(null,`/egzams/${params.id}/open-question`,'get','/notyfications',true)
    
    return response.openAnswer ? response : redirect('/user/notyfications')
}