import { Box, Flex, FormControl, FormLabel, Select, Stack, Switch } from "@chakra-ui/react";
import ChooseTestQuestionsNumber from "./Forms/ChooseTestQuestionsNumber";
import QuestionSettings from "./Forms/QuestionSettings";
import SetTime from "./Forms/SetTime";


export default function CreateTestSetting({egzam, setEgzam, categories, undercategories}) {
    const categoryOptions= categories.map((e)=><option key={e.id} value={e.id}>{e.name}</option>)
    const undercategoryOptions= undercategories.map((e)=><option key={e.id} value={e.id}>{e.name}</option>)
    return (
    <div className="p-10">
    <h3 className="inline-block bold-serif m-16">Ustawienia szczególne</h3>
    <Flex
      flexDir={{ base: "column", md: "row" }}
      flexWrap={'wrap'}
      gap={14}
      alignItems="start"
      justifyContent={{ md: "space-between" }}
    >
      <Stack gap={6}>
      <ChooseTestQuestionsNumber />
      <FormControl>
        <FormLabel>Wybierz kategorię</FormLabel>
        <Select name='category' placeholder="Wszystkie kategorie">
        {categoryOptions}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Wybierz podkategorię</FormLabel>
        <Select name='undercategory' placeholder="Wszystkie podkategorie">
        {undercategoryOptions}
        </Select>
      </FormControl>
      </Stack>
      <QuestionSettings />
      <Stack gap={6}>
      <FormControl as={Box} w={"fit-content"} display={"flex"} gap="6">
        <Switch checked={egzam} value={true} onChange={setEgzam.toggle} name="egzam" />
        <FormLabel>Tryb egzaminu</FormLabel>
      </FormControl> 
     {egzam && <SetTime />}
      </Stack>
    </Flex>

  </div>
  )
}