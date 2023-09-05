import { useLoaderData, useNavigate } from "react-router-dom"
import AddOrDeleteQuestion from "../../../../Components/ModifyQuestions/AddOrDeleteQuestion"
import TestIcon from "../../../../Components/TestIcon"
import Title from "../../../../Components/Title"
import { Box } from "@chakra-ui/react"
export default function AfterCreation() {
    const loaderData=useLoaderData()
    console.log(loaderData)
    const navigate=useNavigate()
  return (
    <Box padding={[2,4,4,8,16]}>
    <Title title='Modyfikuj nowoutworzony test' />
    <div className=" my-10 flex flex-col gap-20">
    <TestIcon {...loaderData.test} onClick={()=>navigate('/user/tests')}/>

    <AddOrDeleteQuestion add={true} testId={loaderData.test.id} />
    <AddOrDeleteQuestion add={false} testId={loaderData.test.id} /></div>
    </Box>
  )
}