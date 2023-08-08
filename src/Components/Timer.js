import { useEffect, useState } from "react";
import useMsToTime from "../hooks/useMsToTime";

export default function Timer({start = false, time=0, setTime, setSubmit}) {
    const [count, setCount]=useState(time)
   const clock=useMsToTime(count) 
   const howLong=useMsToTime(time-count)
    useEffect(
        ()=>{

            start && setInterval( counter,1000)
            
        },[start]
    )
    useEffect(
        ()=>{
            if(count<1000 && time>0)
            {
                setSubmit(true)
                setTime('00:00:00')
            }else{
         
            setTime(`${howLong[0]}:${howLong[1]}:${howLong[2]}`)
            }
            

        },[count, time, howLong]
    )
 
    function counter()
    {
        if(count>=1000)
        {
            setCount((s)=>s-1000)
        }
    }
    const text=start ? `${clock[0]}:${clock[1]}:${clock[2]}`: "--:--:--"

   
  return (
   <div className="flex flex-col items-center"><p>Pozostały czas</p>
 <b>{ text}</b>
    </div>
  )
}
