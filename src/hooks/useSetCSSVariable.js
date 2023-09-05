import { useCallback } from "react"

export default function useSetCSSVariable() {

    const changer=useCallback((selector,property, value)=>{
        const element=document.querySelector(selector);
        element.style.setProperty(property, value)
    },[])

  return changer
}