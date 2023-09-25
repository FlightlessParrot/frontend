import { Checkbox, FormControl, FormErrorMessage,FormLabel, Input,  NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack } from "@chakra-ui/react";
import { useState } from "react";

export default function SubscriptionForm({setName, name, setPrice, price, date, setDate, discountPrice, setDiscountPrice, discountCheckbox, setDiscountCheckbox, lowestPrice, setLowestPrice}) {

  return (
    
<Stack gap={8}>
        <FormControl >
            <FormLabel>Nazwa subskrypcji</FormLabel>
            <Input onChange={e=>setName(e.target.value)} value={name} name='name' required maxLength={250} />
            <FormErrorMessage>Musisz podać nazwę.</FormErrorMessage>
        </FormControl>
        <FormControl>
            <FormLabel>Cena w polskich złotych</FormLabel>

            <NumberInput onChange={setPrice} value={price} name='price' required min={0} max={100000} precision={2} step={1}>
            <NumberInputField   /> 

            <NumberInputStepper>
                <NumberIncrementStepper  color={'inherit'} />
                <NumberDecrementStepper  color={'inherit'}/>
            </NumberInputStepper>
          
            </NumberInput>  
 
            <FormErrorMessage>Musisz podać cenę.</FormErrorMessage>
        </FormControl>
     
        <FormControl>
            <Checkbox isChecked={discountCheckbox} onChange={e=>setDiscountCheckbox(e.target.checked)}>Chcę dodać cenę promocyjną</Checkbox>
        </FormControl>
        {discountCheckbox && 
        <><FormControl isInvalid={discountPrice>=price}>
            <FormLabel>Cena promocyjna</FormLabel>
            

            <NumberInput onChange={setDiscountPrice} value={discountPrice} name='discount_price' required min={1.00} max={price-1} precision={2} step={1}>
            <NumberInputField   /> 

            <NumberInputStepper>
                <NumberIncrementStepper  color={'inherit'} />
                <NumberDecrementStepper  color={'inherit'}/>
            </NumberInputStepper>
          
            </NumberInput>  
 
            <FormErrorMessage>Cena musi być niższa niż cena bazowa
            </FormErrorMessage>
        </FormControl>
           <FormControl>
           <FormLabel>Najniższa cena w ciągu ostatnich 30 dni</FormLabel>

           <NumberInput onChange={setLowestPrice} value={lowestPrice} name='lowest_price' min={0} max={100000} precision={2} step={1}>
           <NumberInputField   /> 

           <NumberInputStepper>
               <NumberIncrementStepper  color={'inherit'} />
               <NumberDecrementStepper  color={'inherit'}/>
           </NumberInputStepper>
         
           </NumberInput>  

       </FormControl></>}
        <FormControl>
        <FormLabel>Do kiedy trwa subskrypcja</FormLabel>
        <div className="bg-gray-100 rounded-md">
        <Input value={date} onChange={e=>setDate(e.target.value)}  variant='filled' color='gray.900'  name='license_duration' type='date' required />
        </div>
        </FormControl>
       </Stack>
  )
}
