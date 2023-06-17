import { Navigate, useLoaderData, useNavigation, useLocation, Outlet } from "react-router-dom"

export default function User() {
    const navigation =useLocation()
    const loaderData=useLoaderData();
    console.log(navigation.pathname)
  return (<div>
   { navigation.pathname=='/user' && <Navigate to='/user/main' />}
        <Outlet />
    </div>
  )
}