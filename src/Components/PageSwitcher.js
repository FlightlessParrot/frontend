import { NavLink } from "react-router-dom";

export default function PageSwitcher({links}) {
   const switches= links.map(({url, name},i)=>{
   return <NavLink
   key={i}
    to={url}
    className={({isActive, isPending})=>{
        return isActive ? 'active-page-switcher-link' : 'disactive-page-switcher-link';
    }}
    >{name}</NavLink>})

    

  return (

    <div className="grid grid-cols-2">
        
    {switches}
    </div>
  )
}