import { Outlet } from "react-router-dom"
import PageSwitcher from "../../../Components/PageSwitcher"

export default function Flashcards() {

    const pageSwitcherLinks=[
        {
            url: '/user/admin/flashcards/new',
            name: 'Stwórz fiszkę'
        },{
            url: '/user/admin/flashcards/delete',
            name: 'Usuń fiszkę'
        }]
  return (
    <div>
        <PageSwitcher links={pageSwitcherLinks}/>
        <Outlet />
        </div>
  )
}