import { Stack } from "@chakra-ui/react"

export default function ShowTestSettings({name, questionsNumber, egzam}) {
  return (
    <Stack direction={{base: 'row', md: 'column'}} justify={{base: 'space-between', }}  textAlign={"center"} spacing={{md:'20px'}} p="4">

        <b className="bold-serif hidden md:block">Ustawienia testu</b>
        <p className="block max-h-20 text-ellipsis">{name}</p>
        <p>{questionsNumber} pytań</p>
        <p>Tryb {egzam ? 'egzamin' : 'nauki'} </p>

    </Stack>


  )
}