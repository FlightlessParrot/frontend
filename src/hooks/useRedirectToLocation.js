import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function useRedirectToLocation(location, dependency) {

     const navigate=useNavigate()
    useEffect(
        ()=>{
            dependency && navigate(location);
        },[dependency, navigate, location]
    );
   
}