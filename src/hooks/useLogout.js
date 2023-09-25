import { useNavigate} from "react-router-dom";
import universalFetchSchema from "../fetch/universalFetchSchema";
import { useEffect } from "react";


export default function useLogout() {
    const navigate=useNavigate();
    useEffect(()=>{
    universalFetchSchema(null,'/logout');
    navigate('/login')
    },[navigate])

     
  
}