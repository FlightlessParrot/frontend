import { Stack } from "@chakra-ui/react";
import CategoriesCheckboxes from "./CategoriesCheckboxes";

export default function CategoriesAndUndercategoriesCheckboxes({categories, undercategories, categoryState, categoryDispatch}) {
    
  return (
    <Stack gap={6} className="my-10">
   {categories && <CategoriesCheckboxes categoriesArray={categories} name='categories[]' isChecked={categoryState} onChange={categoryDispatch}>
    Wybierz kategorie
  </CategoriesCheckboxes>}
  {undercategories && <CategoriesCheckboxes categoriesArray={undercategories} name='undercategories[]' isChecked={categoryState} onChange={categoryDispatch}>
    Wybierz podkategorie
  </CategoriesCheckboxes>}
  </Stack>
  )
}