import { Navigate, useLoaderData,  useLocation, Outlet } from "react-router-dom"

export default function User() {
    const navigation =useLocation()
    const loaderData=useLoaderData();

  return (<div>
   { navigation.pathname=='/user' && <Navigate to='/user/tests' />}
        <Outlet />
    </div>
  )
}