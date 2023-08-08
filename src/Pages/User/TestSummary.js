import { Link, useLoaderData } from "react-router-dom"
import { Flex } from "@chakra-ui/react"

export default function TestSummary() {
    const loaderData=useLoaderData()
    console.log(loaderData)
  return (
    <div style={{backgroundColor: loaderData.correctAnswers.length > loaderData.wrongAnswers.length ? 'green' : 'red' }} className="p-4 w-screen h-screen flex justify-center">
      <div><h1 className="article-title-font">{loaderData.correctAnswers.length > loaderData.wrongAnswers.length ? 'Huurra' :'Ojoj' }</h1>
        <i>{loaderData.correctAnswers.length > loaderData.wrongAnswers.length ? 'Masz więcej' : 'Masz mniej'} niż 50% poprawnych odpowiedzi</i>

        <Flex marginY={'40px'} direction={'column'} alignItems={'lstart'} justifyContent={'start'} gap={12}>
            <h2 className="lead">{Math.round(loaderData.correctAnswers.length/loaderData.allAnswers.length * 100)} % poprawnych odpowiedzi</h2>
            <h3 className="lead">Test ukończono w czasie: {loaderData.generatedTest.duration}</h3>
            <h3 className="lead">Test składał się z {loaderData.allAnswers.length} pytań</h3>
        </Flex>
        
        <Link className='action-button' to={'/user/tests/statistics/test'}>Statystyki</Link></div>  

    </div>
  )
}