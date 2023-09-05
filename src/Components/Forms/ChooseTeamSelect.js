import { FormControl, FormLabel, Select } from "@chakra-ui/react";

export default function ChooseTeamSelect({teams, team, setTeam}) {

    const options=teams.map(
        (e)=><option key={e.id} value={e.id}> {e.name}</option>
    )
  return (
    <FormControl>
    <FormLabel>Wybierz zespół</FormLabel>
    <Select placeholder="Wybierz zespół" value={team} onChange={e=>setTeam(e.target.value)}>
        {options}
    </Select>
    </FormControl>
  )
}