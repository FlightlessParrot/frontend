import { useState } from "react";

export default function useMsToTime(count) {

    const allSec=Math.floor(count/1000) 
        const seconds=createTwoNumbersString(allSec % 60);
        
    
        const allMin=Math.floor(count/(60*1000))
        const minutes=createTwoNumbersString(allMin % 60)
    
        const hours=createTwoNumbersString(Math.floor(count/(60*60*1000)))


        function createTwoNumbersString(number)
        {
           const integer= Math.floor(number)
            const string= integer < 10 ? '0'+integer : integer;
            return string
        }
  return [hours,minutes,seconds, `${hours}:${minutes}:${seconds}`]
}
export function useMultipleMsToTime() {
      const [time, setTime]=useState(0)
      const timeFormat=useMsToTime(time)
  
  return (givenTime)=>{setTime(givenTime);return timeFormat}
}