import { Navigate, useLoaderData,  useLocation, Outlet, useNavigate,  } from "react-router-dom"
import NotyficationIcon from "../../Components/Notyfications/NotyficationIcon";
import notyficationsLoader from "../../fetch/loader/notyficationsLoader";
import { useEffect,   useState } from "react";

export default function User() {
    const navigation =useLocation()
    const navigate=useNavigate()
    useLoaderData();

    const [notyfications, setNotyfications]=useState([]);
  

    useEffect(
      ()=>{
          const getNotyfications=async ()=>{
            const response = await notyficationsLoader();
            setNotyfications(response.notyfications)
          }
          getNotyfications()
          const interval=setInterval(()=>{
      getNotyfications() 
      },60000)  
      
      return ()=>clearInterval(interval)
      },[]
    )
  const showNotyfications=navigation.pathname.split('/')[2]!=='test' && navigation.pathname !=='/user/tests/flashcards/start' &&notyfications.length>0

  return (<div>
   { navigation.pathname=='/user' && <Navigate to='/user/tests' />}
    {showNotyfications && <NotyficationIcon  onClick={()=>navigate('/user/notyfications')} notyficationsLength={notyfications.length} />}
        <Outlet />
        
    </div>
  )
}