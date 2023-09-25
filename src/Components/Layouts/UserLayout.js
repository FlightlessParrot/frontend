import TopBar, { MobileBar } from "./TopBar"
import { userMainLinks, testLinks, teacherLinks, dataLinks, adminLinks } from "../../Data/navLinks"
import { NavLink } from "react-router-dom"
import { getCookie } from "../../cookies/getCookie"

const role=getCookie('role')
 const mainLinks=userMainLinks.MainNav.filter((e)=>(!e.onlyTeacher && !e.onlyAdmin) || (role!=='student' && e.onlyTeacher) || (role==='admin' && e.onlyAdmin))

export default function UserLayout(props) {
 

  const links=props.links.map((e)=>{
    return(
      <NavLink to={e.url} key={e.id}>
        {e.name}

      </NavLink>
    )
  })
  return (
    <div className="layout h-screen  lg:w-screen lg:grid items-stretch flex flex-col">
      <div className="row-span-1">
        <TopBar links={[...mainLinks, userMainLinks.Help[0]]} reportBugUrl='/user/report-error' />
        <MobileBar  mainNav={mainLinks} help={userMainLinks.Help} underNav={props.links} /></div>
        <div className="lg:flex self-stretch flex-grow overflow-y-auto">
            <nav className="p-4  h-full lg:flex flex-col bg-baltic justify-center items-start hidden lg:w-48 gap-8  self-stretch">{links}</nav>
            <div className=" w-full  overflow-y-auto">{props.children}</div>
        </div>
    </div>
  )
}

export function TestUserLayout(props) {

  return (
    <UserLayout links={testLinks}>{props.children}</UserLayout>
  )
}
export function TeamUserLayout(props){
  return  <UserLayout links={teacherLinks} >{props.children}</UserLayout>
}
export function DataUserLayout(props){
  return  <UserLayout links={dataLinks}>{props.children}</UserLayout>
}
export function AdminUserLayout(props){
  return  <UserLayout links={adminLinks}>{props.children}</UserLayout>
}
export function OnlyTopBar({children})
{

  return (
    <div className="lg:h-screen min-h-screen lg:w-screen static flex flex-col">
        <TopBar links={[...mainLinks, userMainLinks.Help[0]]} reportBugUrl='/user/report-error' />
        <MobileBar  mainNav={mainLinks} help={userMainLinks.Help} underNav={testLinks} />
        <div className="overflow-y-auto overflow-x-clip w-screen ">{children}</div>
       
    </div>
  )
}