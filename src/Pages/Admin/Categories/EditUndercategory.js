import { Box, Flex, FormControl, FormErrorMessage, FormLabel, Input, Stack } from '@chakra-ui/react';
import React, { useEffect, useReducer, useState } from 'react'
import { Form, useActionData, useLoaderData } from 'react-router-dom'
import Title from '../../../Components/Title';
import useShowToast from '../../../hooks/useShowToast';
import CategoriesCheckboxes from '../../../Components/Forms/CategoriesCheckboxes';


export default function EditUndercategory() {
  const loaderData = useLoaderData();
  const undercategory = loaderData.undercategory;
  console.log(loaderData)
  const [name, setName] = useState(undercategory.name);
  const actionData = useActionData()
  const exist = loaderData.undercategories.filter(
    element => element.name.toLowerCase().trim() === undercategory.name.toLowerCase().trim()
  );
  const isInvalid = (name === '' || exist.length > 1)
  const [state, dispatch]=useReducer(reducer, undercategory.categories,initializer)
  const toast = useShowToast()
  useEffect(
    ()=>{
      if(actionData)
      {
        toast({
          title: 'Udało się',
          description: 'Podkategoria została zmieniona',
          status: 'success'
        })
      }
      if(actionData===false)
      {
        toast({
          title: 'Błąd',
          description: 'Coś poszło nie tak',
          status: 'error'
        })
      }
    },[actionData, toast])

  function reducer(state, action)
  {
    const newState=state
    if(state.categories.includes(action.target.value)) 
    {
      newState.categories=state.categories.filter((e)=>e!==action.target.value);
    }else{
      newState.categories.push(action.target.value);
    }

    return {...newState}
  }

  function initializer(categories)
  {
    console.log(categories)
    const arrayOfCategories = categories.map(element => {
      return element.id.toString()
    });

    return {categories: arrayOfCategories};
  }
  return (
    <Box>
      <Title title={'Edytuj kategorie ' + undercategory.name} />
      <Form method='post'>
      <Stack spacing={16} marginY={[4, 8]} padding={[2, 4, 4, 8, 16]}>
        
          <FormControl isInvalid={isInvalid}>
            <FormLabel>Nazwa podkategorii</FormLabel>
            <Input required name='name' onChange={e => setName(e.target.value)} value={name} />
            <FormErrorMessage>{exist.length > 1 ? `Taka kategoria już istnieje.` : 'To pole jest wymagane'}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={state.categories.length === 0}>
          <CategoriesCheckboxes categoriesArray={loaderData.categories} name='categories[]' isChecked={state} onChange={dispatch}>
            Przypisane kategorie
          </CategoriesCheckboxes>
          <FormErrorMessage>Musisz wybrać przynajmniej jedną kategorię</FormErrorMessage>
          </FormControl>
          <Flex justify={'end'}><button className="action-button" onClick={(e => (isInvalid || state.categories.length === 0 ) && e.preventDefault())}>Stwórz</button></Flex>
      
      </Stack>
      </Form>
    </Box>
  )
}
