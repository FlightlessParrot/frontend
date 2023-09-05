import { Box, Flex, FormControl, FormLabel,  Stack, Switch} from "@chakra-ui/react";
import ChooseTestQuestionsNumber from "./Forms/ChooseTestQuestionsNumber";
import QuestionSettings from "./Forms/QuestionSettings";
import SetTime from "./Forms/SetTime";
import ChoosePercent from "./Forms/ChoosePercent";
import CategoriesCheckboxes from "./Forms/CategoriesCheckboxes";


export default function CreateTestSetting({egzam, setEgzam, categories, undercategories, readOnlyEgzam}) {
   
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
      <CategoriesCheckboxes categoriesArray={categories} name='categories[]'>
        Wybierz kategorie
      </CategoriesCheckboxes>
      <CategoriesCheckboxes categoriesArray={undercategories} name='undercategories[]'>
        Wybierz podkategorie
      </CategoriesCheckboxes>
    
      </Stack>
      <QuestionSettings />
      <Stack gap={6}>
       <ChoosePercent label='Wybierz próg po przekroczeniu którego test jest zdany.' name='gandalf' />
      <FormControl as={Box} w={"fit-content"} display={"flex"} gap="6">
        <Switch isChecked={egzam} readOnly={readOnlyEgzam ? true : false} value={true} onChange={!readOnlyEgzam && setEgzam.toggle} name="egzam" />
        <FormLabel>Tryb egzaminu</FormLabel>
      </FormControl> 
     {egzam && <SetTime />}
      </Stack>
    </Flex>

  </div>
  )
}

