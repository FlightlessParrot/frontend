import { Stack } from "@chakra-ui/react";
import CategoriesCheckboxes from "./CategoriesCheckboxes";
import useFilterUndercategoriesByCategories from "../../hooks/useFilterUndercategoriesByCategories";

export default function CategoriesAndUndercategoriesCheckboxes({categories, undercategories, categoryState, categoryDispatch,notFilter}) {
    const filteredUndercategories=useFilterUndercategoriesByCategories(categoryState['categories'],undercategories)
  return (
    <Stack gap={6} className="my-10">
   {categories && <CategoriesCheckboxes categoriesArray={categories} name='categories[]' isChecked={categoryState} onChange={categoryDispatch}>
    Wybierz kategorie
  </CategoriesCheckboxes>}
  {undercategories && <CategoriesCheckboxes categoriesArray={notFilter ? undercategories : filteredUndercategories} name='undercategories[]' isChecked={categoryState} onChange={categoryDispatch}>
    Wybierz podkategorie
  </CategoriesCheckboxes>}
  </Stack>
  )
}