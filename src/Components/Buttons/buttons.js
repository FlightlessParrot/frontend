import {  NavLink} from "react-router-dom";

export default function ReportBugButton(props)
{
   
    return(
        <NavLink to='/report-error'  className={`px-2 py-2 m-4 border-white rounded border button-font ${props.classes}`}> 
         Zgłoś błąd aplikacji
        </NavLink>
    )
}

