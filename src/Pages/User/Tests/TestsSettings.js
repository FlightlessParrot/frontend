import PageSwitcher from "../../../Components/PageSwitcher";

import { Outlet } from "react-router-dom";
export default function TestsSettings() {
    const PageSwitcherLinks=[
        {
            url: '/user/tests/settings/new',
            name: 'Stwórz test'
        },{
            url: '/user/tests/settings/delete',
            name: 'Usuń test'
        }
    ]
  return (
  <>
    <PageSwitcher links={PageSwitcherLinks} />
    <div className="p-4">
    <Outlet />
    </div></>
  )
}