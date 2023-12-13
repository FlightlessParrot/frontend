import { Box, FormControl, FormLabel, Select } from "@chakra-ui/react";
import CategoriesAndUndercategoriesCheckboxes from "../Forms/CategoriesAndUndercategoriesCheckboxes";
import { useLoaderData } from "react-router-dom";
export default function ChooseType({ categoryState, categoryDispatch, typeValue, onTypeChange}) {
  const loaderData=useLoaderData()
  console.log(loaderData)
  const types=[
    ['one-answer', 'Jednokrotnego wyboru'],
    ['many-answers','Wielokrotnego wyboru'],
    ['order','Ułóż w kolejności'],
    ['pairs', 'Połącz w pary'],
    ['short-answer','Krótka odpowiedź pisemna']
]
const options=types.map((e,i)=><option key={i} value={e[0]}>{e[1]}</option>)

  return (
    <Box >
        <FormControl>
          <FormLabel>Typ pytania</FormLabel>
          <Select name='type' value={typeValue} onChange={onTypeChange}>{options}</Select>
        </FormControl>
        <CategoriesAndUndercategoriesCheckboxes categories={loaderData.categories} undercategories={loaderData.undercategories} categoryState={categoryState} categoryDispatch={categoryDispatch} />
    </Box>
  )
}