import { Navigate, useLoaderData,  useLocation, Outlet, useNavigate } from "react-router-dom"
import NotyficationIcon from "../../Components/Notyfications/NotyficationIcon";
import notyficationsLoader from "../../fetch/loader/notyficationsLoader";
import { useEffect, useState } from "react";

export default function User() {
    const navigation =useLocation()
    const navigate=useNavigate()
    const loaderData=useLoaderData();
    const [notyfications, setNotyfications]=useState([]);

    useEffect(
      ()=>{
          const getNotyfications=async ()=>{
            const response = await notyficationsLoader();
            setNotyfications(response.notyfications)
          }
          getNotyfications()
      },[]
    )
  return (<div>
   { navigation.pathname=='/user' && <Navigate to='/user/tests' />}
    {notyfications.length>0 && <NotyficationIcon  onClick={()=>navigate('/user/notyfications')} />}
        <Outlet />
        
    </div>
  )
}