import { Flex, FormControl, FormErrorMessage, FormLabel, Select, Box, Input, Stack, Badge } from "@chakra-ui/react";
import { Form, Link, useActionData, useLoaderData } from "react-router-dom";
import useFormController from "../../../hooks/useFormController";
import { useEffect, useState } from "react";
import useShowToast from "../../../hooks/useShowToast";
import Title from "../../../Components/Title";
import DataLayout from "../../../Components/Data/DataLayout"
export default function NewCategory() {
  const loaderData=useLoaderData();
  const categories=loaderData.categories
  const [type, setType]=useState('category')
  const [chooseCategory, setChooseCategory]=useState(loaderData.categories[0])
  const data=useLoaderData()

  const initValue={
    name:{
      blur: false, 
      value: ''
    }
  }
  const [state, dispatch]=useFormController(initValue)
  const key=type==='category' ? 'categories' : 'undercategories'
  const exist = data[key].includes(state.name.value)
  const plCategory=type==='category' ? 'kategorię' : 'podkategorię'
  const actionData=useActionData()
  const toast=useShowToast()
  useEffect(
    ()=>{
      if(actionData && !actionData?.error)
      {
        toast({
          title: 'Udało się',
          description: 'Utworzyłeś nową '+plCategory,
          status: 'success'
        })
      }
      if(actionData?.error)
      {
        toast({
          title: 'Błąd',
          description: 'Coś poszło nie tak',
          status: 'error'
        })
      }
    },[actionData, toast, plCategory]
  )
  return (
    <Box >
      <Title title='Stwórz kategorie i podkategorie' />
      <Form method='post'>
        <Stack spacing={16} marginY={[4,8]} padding={[2,4,4,8,16]}>
        <FormControl >
          <FormLabel>Wybierz czy chcesz utworzyć kategorię czy podkategorię</FormLabel>
          <Select required  value={type} onChange={e=>setType(e.target.value)} name='type'>
            <option value='category'>kategoria</option>
            <option value='undercategory'>podkategoria</option>
          </Select>
        </FormControl>
        {type==='undercategory' && <FormControl >
          <FormLabel>Wybierz kategorię, do której należy podkategoria</FormLabel>
          <Select required  value={chooseCategory} onChange={e=>setChooseCategory(e.target.value)} name='categories[]'>
           { categories.map(e=><option value={e.id} key={e.id}>{e.name}</option>)}
           
          </Select>
        </FormControl>}
        <FormControl isInvalid={state.name.blur===true && (state.name.value==='' || exist)   }>
          <FormLabel>Wprowadź nazwę {type==='category' ? 'kategorii': 'podkategorii'}</FormLabel>
          <Input required name='name' value={state.name.value} onChange={dispatch}  />
          <FormErrorMessage>{exist ? `Taka ${plCategory} już istnieje.`:'To pole jest wymagane'}</FormErrorMessage>
        </FormControl>
        <Flex justify={'end'}><button className="action-button">Stwórz</button></Flex>
        </Stack>
      </Form>
      <DataLayout title='Edytuj kategorię'>
        <Flex gap={4} wrap={'wrap'}>
        {
        loaderData.categories.map((e)=><Link to={'/user/admin/categories/category/'+e.id} key={e.id}><Badge colorScheme='teal'>{e.name}</Badge></Link>)
        }</Flex>
      </DataLayout>
      <DataLayout title='Edytuj podkategorię'>
      <Flex gap={4} wrap={'wrap'}>
      {loaderData.undercategories.map((e)=><Link to={'/user/admin/categories/subcategory/'+e.id} key={e.id}><Badge colorScheme='teal'>{e.name}</Badge></Link>)}
      </Flex>
      </DataLayout>
    </Box>
  )
}