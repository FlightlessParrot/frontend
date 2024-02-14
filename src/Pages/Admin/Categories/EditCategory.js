import { Box, Flex, FormControl, FormErrorMessage, FormLabel, Input, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Form, useActionData, useLoaderData } from 'react-router-dom'
import Title from '../../../Components/Title';
import useShowToast from '../../../hooks/useShowToast';

export default function EditCategory() {
    const loaderData = useLoaderData();
    const category = loaderData.category;
    const [name, setName] = useState(category.name);
    const actionData = useActionData()
    const exist=loaderData.categories.filter(
        element => element.name.toLowerCase().trim() === category.name.toLowerCase().trim()  
        );
    const isInvalid = (name==='' || exist.length>1)
    const toast=useShowToast()
    useEffect(
      ()=>{
        if(actionData)
        {
          toast({
            title: 'Udało się',
            description: 'Kategoria została zmieniona',
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
    return (
    <Box>
        <Title title={'Edytuj kategorie '+category.name}/>
        <Stack spacing={16} marginY={[4,8]} padding={[2,4,4,8,16]}>
        <Form method='post'>
        <FormControl isInvalid={isInvalid}>
          <FormLabel>Nazwa kategorii</FormLabel>
          <Input required name='name' onChange={e=>setName(e.target.value)} value={name}  />
          <FormErrorMessage>{exist.length > 1 ? `Taka kategoria już istnieje.`:'To pole jest wymagane'}</FormErrorMessage>
        </FormControl>
        <Flex justify={'end'}><button className="action-button" onClick={(e=>isInvalid && e.preventDefault())}>Stwórz</button></Flex>
        </Form>
        </Stack>
    </Box>
  )
}
