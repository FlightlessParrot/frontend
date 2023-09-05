import { FormControl, FormLabel, Select } from "@chakra-ui/react";

export default function SelectTime({onChange, value}) {
  return (

        <FormControl className="max-w-4xl">
            <FormLabel>Wybierz okres z jakiego mają być pokazywane statystyki.</FormLabel>
        <Select placeholder='Wybierz okres' onChange={onChange} value={value}>
            <option value={'-1 week'}>Ostatni tydzień</option>
            <option value={'-1 month'}>Ostatni miesiąc</option>
            <option value={'-100 years'}>Od początku subskrypcji</option>
        </Select>
        </FormControl>

    
  )
}