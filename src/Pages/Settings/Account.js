import { Outlet, useLocation } from "react-router-dom";
import Title from "../../Components/Title";
import { useEffect, useState } from "react";
import { DataUserLayout } from "../../Components/Layouts/UserLayout";

export default function Account() {
    const [show, setShow]=useState(true)
    const navigation=useLocation()
  
    useEffect(
        ()=>{
            if(navigation.pathname==='/user/account' || navigation.pathname==='/user/account/data')
            {
                setShow(true)
            }else{
                setShow(false)
            }
        },[navigation.pathname]
    )
  return (
    <DataUserLayout>
        {show && <><Title title='Ustawienia konta' />
        <i className="block pl-4">Zmieniaj i dodawaj ustawienia konta</i></>}
        <Outlet />    </DataUserLayout>

  )
}