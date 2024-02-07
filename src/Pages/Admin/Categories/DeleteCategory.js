import { Button, Box, FormControl, FormErrorMessage,  } from "@chakra-ui/react";
import { Form,  useActionData,  useLoaderData} from "react-router-dom";
import { useEffect } from "react";
import Title from "../../../Components/Title";
import CategoriesAndUndercategoriesCheckboxes from "../../../Components/Forms/CategoriesAndUndercategoriesCheckboxes";
import useCategoriesReducer from "../../../hooks/useCategoriesReducer";
import useShowToast from "../../../hooks/useShowToast";



export default function DeleteCategory() {
    const [state, dispatch]=useCategoriesReducer(true, true)
    const loaderData=useLoaderData()
    const actionData=useActionData()
    const toast=useShowToast()
    console.log(loaderData)
    useEffect(
        ()=>{
          if(actionData && !actionData?.error)
          {
            toast({
              title: 'Udało się',
              description: 'Element został usunięty.',
              status: 'success'
            })
          }
          if(actionData?.error)
          {
            toast({
              title: 'Błąd',
              description: 'Element nie został usunięty.',
              status: 'error'
            })
          }
        },[actionData, toast])
  return (
    <Box >
    <Title title='Usuń kategorie lub podkategorie' />
    <Form  method='post'>
        <Box padding={[2,4,4,8,16]}>
        <CategoriesAndUndercategoriesCheckboxes notFilter  categories={loaderData.categories} undercategories={loaderData.undercategories} categoryDispatch={dispatch} categoryState={state}/>
        <FormControl isInvalid={!state.categories.length && !state.undercategories.length}>
        <FormErrorMessage >Nie wybrałeś kategorii ani podkategorii</FormErrorMessage>
        </FormControl>
      <Button type='submit'  colorScheme="red" >USUŃ</Button>
        </Box>
    </Form>
  </Box>
  )
}