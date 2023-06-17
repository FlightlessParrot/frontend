import TopBar, { MobileBar } from "./TopBar"
import { userMainLinks, testLinks } from "../../Data/navLinks"
import { NavLink } from "react-router-dom"
export default function UserLayout(props) {
  const links=props.links.map((e)=>{
    return(
      <NavLink to={e.url} key={e.id}>
        {e.name}

      </NavLink>
    )
  })
  return (
    <div className="lg:h-screen min-h-screen lg:w-screen static flex flex-col">
        <TopBar links={[...userMainLinks.MainNav, userMainLinks.Help[0]]} reportBugUrl='/user/report-error' />
        <MobileBar  mainNav={userMainLinks.MainNav} help={userMainLinks.Help} underNav={testLinks} />
        <div className="lg:flex lg:h-full items-stretch">
            <nav className="p-4 lg:flex flex-col bg-baltic justify-center items-start hidden lg:w-48 gap-8 h-full self-stretch">{links}</nav>
            <div className="overflow-y-auto w-full ">{props.children}</div>
        </div>
    </div>
  )
}
export function TestUserLayout(props) {
  return (
    <UserLayout links={testLinks}>{props.children}</UserLayout>
  )
}