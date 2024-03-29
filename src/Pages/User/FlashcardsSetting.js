import { Form, Outlet, useActionData, useLoaderData, useNavigate } from "react-router-dom";
import Title from "../../Components/Title";
import ChooseTestQuestionsNumber from "../../Components/Forms/ChooseTestQuestionsNumber";
import { Box, Stack} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CategoriesCheckboxes from "../../Components/Forms/CategoriesCheckboxes";
import useShowToast from "../../hooks/useShowToast";
import useControlCategoriesAndUndercategories from "../../hooks/useControlCategoriesAndUndercategories";
import useFilterUndercategoriesByCategories from "../../hooks/useFilterUndercategoriesByCategories";

export default function FlashcardsSetting() {
    const actionData=useActionData()
    const loaderData=useLoaderData()
    const [data, setData]=useState(null)
  
    const categories=loaderData.categories
    const undercategories=loaderData.undercategories
    const toast=useShowToast()
    const navigate=useNavigate()
    const [checkedCategories, dispatchCheckedCategories]=useControlCategoriesAndUndercategories();
    const filteredUndercategories=useFilterUndercategoriesByCategories(checkedCategories['categories'],undercategories)
    useEffect(
      ()=>{ 
        if(actionData?.flashcards && actionData.flashcards.length)
        {
          setData(actionData)
          navigate('start');
        } 
        if( actionData?.flashcards && !actionData.flashcards.length )
        {
          toast(
          {'title': 'Błąd',
          'description': 'Nie ma fiszek, które spełniają podane kryteria',
          'status': 'error'}
          )
        }
      },[actionData, navigate]
    )
  return (
    <Box>
        {!(data?.flashcards && data.flashcards.length) ?
        <><Title title='Fiszki' />
        <i className="pl-4 block">Wybierz jakie fiszki chcesz przeglądać</i>
        <Form  method='post'  >
            <Stack padding={[2,4,4,8,16]} spacing={'60px'}>
            <ChooseTestQuestionsNumber label='Wybierz ilość fiszek'/>
            <CategoriesCheckboxes categoriesArray={categories} onChange={dispatchCheckedCategories} isChecked={checkedCategories} name='categories[]'>
        Wybierz kategorie
      </CategoriesCheckboxes>
      <CategoriesCheckboxes categoriesArray={filteredUndercategories} onChange={dispatchCheckedCategories} isChecked={checkedCategories} name='undercategories[]'>
        Wybierz podkategorie
      </CategoriesCheckboxes></Stack>
      <button className="action-button float-right m-8 md:m-16">Start</button>
        </Form></>:

        <Outlet context={data}/>}
    </Box>
  )
}