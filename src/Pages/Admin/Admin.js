import { Outlet, useLocation } from "react-router-dom";
import Title from "../../Components/Title";
import { AdminUserLayout } from "../../Components/Layouts/UserLayout";

export default function Admin() {
    const location=useLocation()
  return (
    <AdminUserLayout>
       {location.pathname === '/user/admin' && <Title title='Zarządzaj aplikacją' />}
        <Outlet />
    </AdminUserLayout>
  )
}