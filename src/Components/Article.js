import { useState } from "react"

export default function Article({text, givenClasses})
{
 
   const [visible, setVisible]= useState(false)

   const clickHandler=(e)=>{
    e.preventDefault();
    setVisible((s)=>!s)
   }
    return(
        <div className={`grid  ${givenClasses} my-8 border-y-2 border-sea p-4`}>
            <h1 className="text-left mt-20 article-title-font mb-2">{text.title}</h1>
            <div className="w-32 h-1 bg-mediterrianian mb-10" ></ div>
            <section className={`row-start-3 par flex flex-col gap-4 my-10`}>{visible ? text.text : text.summary }</section>
            <button onClick={clickHandler} className="action-button justify-self-end relative top-0 z-10">{!visible ? 'Dowiedz się więcej' : 'Już się dowiedziałem'}</button>
        </div>
    )
}