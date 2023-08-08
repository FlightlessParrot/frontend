import { Navigate, Outlet, useLocation } from "react-router-dom";
import { TeamUserLayout } from "../../Components/Layouts/UserLayout";

export default function Teacher() {
    const navigation=useLocation()

  return (<TeamUserLayout>
    { navigation.pathname==="/user/team" && <Navigate to='/user/team/create' />}
    <Outlet /></TeamUserLayout>
  )
}