import { FormControl, FormErrorMessage, FormLabel, Select } from "@chakra-ui/react"
import { useState } from "react"
import useMsToTime from "../../hooks/useMsToTime";

export default function SetTime() {
    const [value, setValue]=useState('');
    const [wasTouched, touch]=useState(false)
    const time=useMsToTime
    const options=[]
    for(let i=1;i<10;i++ )
    {
        const ms=i*10*60*1000
        const convertedTime=time(ms)
        options.push(<option key={i} value={`${convertedTime[0]}:${convertedTime[1]}:${convertedTime[2]}`}>

      {`${convertedTime[0]}:${convertedTime[1]}:${convertedTime[2]}`}
        </option>)
    }
  return (
    <FormControl isInvalid={wasTouched && value===''}>
    <FormLabel>Wybierz czas trwania testu</FormLabel>
    <Select value={value} onChange={(e)=>setValue(e.target.value)} placeholder='wybierz czas trwania testu' required name='time' onBlur={(()=>touch(true))} >
        {options}
    </Select>
    <FormErrorMessage>Wybierz czas trwania testu.</FormErrorMessage>
    </FormControl>
  )
}