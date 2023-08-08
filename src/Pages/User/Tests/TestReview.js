import { useLoaderData, useOutletContext } from "react-router-dom"
import AnswerCategory from "../../../Components/Answers/AnswerCategory"
import CheckAnswer from "../../../Components/Answers/CheckAnswer"

export default function TestReview() {
    const loaderData=useLoaderData()
    const data=useOutletContext()
    loaderData.map((e,i)=><CheckAnswer {...loaderData} />)
  return (
    <Stock>
        <Pager>

        </Pager>
    </Stock>
  )
}