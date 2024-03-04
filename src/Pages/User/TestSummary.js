import { Link, useLoaderData, useNavigate } from "react-router-dom"
import { Flex} from "@chakra-ui/react"
import useSetCSSVariable from "../../hooks/useSetCSSVariable"
import { useEffect, useRef, useState } from "react"
import { CSSTransition } from "react-transition-group"

export default function TestSummary() {
    const loaderData=useLoaderData()
    const setCSSVariable=useSetCSSVariable()
    const [inProp, setInProp]=useState(true)
    const navigate=useNavigate()
    const ref=useRef(null)
    const color=loaderData.pass? 'green' : '#900000'
    useEffect(
      ()=>{
        setCSSVariable(':root','--review-div-color', color)
      },[color, setCSSVariable]
    )

    function clickHandler(e)
    {
      e.preventDefault();
      setInProp(false)
      setTimeout((navigate)=>{
        navigate('/user/tests/statistics/test');

      },1200,navigate)
    }
  return (
    <div className="p-4 w-screen h-screen flex justify-center items-center review-father">
      <CSSTransition nodeRef={ref} appear={true} in={inProp} timeout={490} classNames={'review'} > 
      <div ref={ref} className="w-fit max-w-md shadow-xl shadow-black rounded-md p-4 "><h1 className="article-title-font text-center">{loaderData.pass ? 'Huurra!!!' :'Ohhhh' }</h1>
        <i>{loaderData.pass ? 'Masz przynajmniej ' : 'Masz mniej niż '}  {loaderData.generatedTest.gandalf}% poprawnych odpowiedzi</i>

        <Flex marginY={'40px'} direction={'column'} alignItems={'lstart'} justifyContent={'start'} gap={12}>
            <h2 className="lead">{Math.round(loaderData.correctAnswers.length/loaderData.allAnswers.length * 100)} % poprawnych odpowiedzi</h2>
          {loaderData.generatedTest.egzam===1 &&  <h3 className="lead">Test ukończono w czasie: {loaderData.generatedTest.duration}</h3>}
            <h3 className="lead">Test składał się z {loaderData.allAnswers.length} pytań</h3>
        </Flex>
        
        <Link className='action-button' onClick={clickHandler} to={'/user/tests/statistics/test'}>Statystyki</Link></div>  
    </CSSTransition>
    </div>
  )
}