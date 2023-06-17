import { Outlet, useLocation } from "react-router-dom";
import { TestUserLayout } from "../../../Components/Layouts/UserLayout";
import Title from "../../../Components/Title";

export default function Tests(props) {
    const location = useLocation()
    const showTitle = location.pathname === '/user/tests'
  return (
    <TestUserLayout>
        {showTitle && <><Title title='Testy' newClass='mt-16' />
        <h2 className="lead p-4">Generuj testy i zarządzaj nimi.</h2></>}
        <div className="p-4">
            <Outlet />
        </div>
        </TestUserLayout>
  )
}