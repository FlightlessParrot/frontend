import { FormControl, FormErrorMessage,FormLabel, Input,  NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useReducer } from "react";
import { Form } from "react-router-dom";

export default function CreateSubscription() {
    const initValue={
        name:{
            value: '',
            blur: false
        },
        price:{
            value: 100,
            blur: false
        },
    
    }
    const reducer=(state, action)=>{
     
        const newState=state
        if(action==='increment' &&  newState['price'].value<99999)
        {
            newState['price'].value++ 
            newState['price'].blur=true;
            return {...newState}
        }
        if(action==='decrement' && newState['price'].value>=2)
        {
             newState['price'].value-- 
             newState['price'].blur=true
            return {...newState}
        }
        if(action?.target?.name)
        {
        const key=action.target.name
        newState[key].blur=true
        if(key==='price')
        {
            
            newState['price'].value=Number(action.target.value.replaceAll(/[a-zA-Zł]+/g,''))
            if(action.target.value.substr(-1,1)==='z')
            {
                newState['price'].value=Number(newState['price'].value.toString().slice(0,-1))
            }
        }
        else{
            newState[key].value=action.target.value
        }
        
        return {...newState}
        }
        return {...state}
    }
    const [state, dispatch]=useReducer(reducer,initValue)
    console.log(state)
 return (
    <Form method='post'> 
    <Stack gap={8}>
        <FormControl isInvalid={state.name.blur && state.name.value.trim()===''}>
            <FormLabel>Nazwa subskrypcji</FormLabel>
            <Input name='name' value={state.name.value} onChange={dispatch} required maxLength={250} />
            <FormErrorMessage>Musisz podać nazwę.</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={state.price.blur && state.price.value<=0}>
            <FormLabel>Cena w polskich złotych</FormLabel>

            <NumberInput  value={state.price.value} required min={1} max={100000} precision={2} step={1}>
            <NumberInputField   name='price' onChange={dispatch} /> 
         
            <NumberInputStepper>
                <NumberIncrementStepper onClick={()=>dispatch('increment')} color={'inherit'} />
                <NumberDecrementStepper onClick={()=>dispatch('decrement')} color={'inherit'}/>
            </NumberInputStepper>
          
            </NumberInput>  
 
            <FormErrorMessage>Musisz podać cenę.</FormErrorMessage>
        </FormControl>
        <FormControl />
        <FormControl>
        <FormLabel>Wybierz długość trwania subskrypcji</FormLabel>
        <RadioGroup>
            <Stack gap={4}>
        <Radio isRequired name='license_duration' value='month'>Miesiąc</Radio>
        <Radio  isRequired name='license_duration' value='year' >Rok</Radio>
        </Stack>
            </RadioGroup>
        </FormControl>
       </Stack>
       <button className="action-button float-right" onClick={(e)=>{
        if(state.price.value<1 || state.price.value>99999)
        {
            e.preventDefault();
        }
       }}>Stwórz subskrypcję</button>
    </Form>
  )
}