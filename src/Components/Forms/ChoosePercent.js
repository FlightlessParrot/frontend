import { FormControl, FormLabel, Select } from "@chakra-ui/react";

export default function ChoosePercent({name, label,required=true}) {
    const makeOptions=()=>{
        const options=[]
        for(let i=1; i<=10; i++)
        {
            options.push(<option key={i} value={i*10}>{i*10}%</option>)
        }
        return options
    }
  return (
    <FormControl>
        <FormLabel>{label}</FormLabel>
        <Select required={required} name={name} placeholder='Wybierz wartość'>
            {makeOptions()}
        </Select>
    </FormControl>
  )
}