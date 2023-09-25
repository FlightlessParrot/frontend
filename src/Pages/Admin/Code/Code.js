import { Input, Box, Flex, FormControl, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Tag, TagCloseButton, TagLabel, Wrap, Stack } from "@chakra-ui/react";
import Title from "../../../Components/Title";
import DataLayout from "../../../Components/Data/DataLayout";
import { Form, useActionData, useLoaderData, useRevalidator } from "react-router-dom";
import universalFetchSchema from "../../../fetch/universalFetchSchema";
import useShowToast from "../../../hooks/useShowToast";
import { useCallback, useEffect } from "react";

export default function Code() {
    const loaderData=useLoaderData()
    const actionData=useActionData()
    const toast=useShowToast()
    const revalidator=useRevalidator()
    const revalidate=useCallback(revalidator.revalidate,[])
    useEffect(
        ()=>{
            if(actionData?.error)
            {
                toast({
                    title: 'Nie udało się stworzyć kodu rabatowego',
                    status:'error'
                }) 
                
            }
            if(actionData?.discountCode){
                toast({
                    title: 'Stworzono kod rabatowy',
                    status:'success'
                })
                revalidate()
            }
           
        },[actionData,toast, revalidate]
    )
    const deleteCode=async (codeId)=>{
        const response =await universalFetchSchema(null,`/discount-code/${codeId}/delete`,'delete')
        if(response)
        {
            toast({
                title: 'Usunięto kod rabatowy',
                status:'success'
            })
        }else{
            toast({
                title: 'Nie udało się usunąć kodu rabatowego',
                status:'error'
            })
        }
        revalidator.revalidate()
    }
    const tags=loaderData.discountCodes.map(e=><Tag key={e.id} variant='subtle' colorScheme='cyan'>
        <TagLabel>Z kodem {e.code} {e.discount}% zniżki</TagLabel>
        <TagCloseButton onClick={()=>deleteCode(e.id)}/>
    </Tag>)
  return (
    <div>
        <Title title='Stwórz kod' />
        <Box padding={[2,4,4,8,16]}>
            <DataLayout title={'Stwórz kod rabatowy'} >
                <Form method='post'>
                    <Stack gap='30px'>
                    <FormControl>
                    <FormLabel>Podaj kod</FormLabel>
                    <Input name='code' required maxLength={250} />
                    </FormControl>
                    <FormControl>
                    <FormLabel>Podaj zniżkę w procentach</FormLabel>
                    <NumberInput name='discount' min={1} max={100}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper  color={'inherit'}/>
                            <NumberDecrementStepper color={'inherit'}/>
                        </NumberInputStepper>
                    </NumberInput>
                    </FormControl>
                    <Flex justify='end'><button className="action-button">Stwórz</button></Flex> 
                    </Stack>
                </Form>
            </DataLayout>
            <DataLayout title={'Usuń kodrabatowy'}>
                <Wrap spacing={'30px'}>
                {tags}
                </Wrap>
            </DataLayout>
        </Box>
    </div>
  )
}