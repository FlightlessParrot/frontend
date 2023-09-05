import { Box, FormControl, FormLabel, Select } from "@chakra-ui/react";

export default function ChooseTeam({value, onChange, children}) {
    

    return   (
    <FormControl >
        <FormLabel>Wybierz zespół</FormLabel>
        <Select placeholder='Wybierz zespół' value={value} onChange={onChange}>
            {children}
        </Select>
    </FormControl>)
}