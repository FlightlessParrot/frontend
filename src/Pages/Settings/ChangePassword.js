import { FormControl, FormErrorMessage, FormLabel, Input,  } from "@chakra-ui/react";
import { Form, useActionData } from "react-router-dom";

import { useEffect, useState } from "react";
import useShowToast from "../../hooks/useShowToast";


export default function ChangePassword() {
   
    const [password, setPassword]=useState('');
    const [wasPasswordTouched, touchPassword]=useState(false);
    const [confirmPassword, setConfirmPassword]=useState('');
    const actionData=useActionData();
    const toast=useShowToast()
    const errorPassword= wasPasswordTouched && notMatch(password, [/[A-Z]+/,/[0-9]+/,/.{8}/, /[a-z]+/ ]) 
    const errorConfirm=wasPasswordTouched && password!==confirmPassword

    useEffect(
        ()=>{
            if(actionData)
            {
                toast({
                    title: 'Sukcess',
                    description: 'Udało się zmienić hasło',
                    status: 'success'
                })
            }
            if(actionData===false)
            {
                toast({
                    title: 'Błąd',
                    description: 'Nie udało się zmienić hasła',
                    status: 'error'
                })
            }
        },[actionData]
    )
  return (
    <Form method='post'>
    <input className="hidden" value='PUT' name='_method' />
    <FormControl isInvalid={errorPassword}>
        <FormLabel>Nowe hasło</FormLabel>
    <Input type='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value.trim())} onBlur={(e)=>touchPassword(true)} required project='project' />
    <FormErrorMessage>Hasło musi się składać z conajmniej 8 znaków, zawierać małe i duże litery oraz cyfry.</FormErrorMessage>
    </FormControl>
   
    <FormControl isInvalid={errorConfirm} >
        <FormLabel marginTop={'16px'}>Powtórz nowe hasło</FormLabel>
    <Input name='password_confirmation' type='password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value.trim())} required project='project' />
    <FormErrorMessage>Hasła nie są identyczne.</FormErrorMessage>
    </FormControl>
<button className="action-button" >Zmień hasło</button> 
</Form>
  )
}

function notMatch(string, arrayOfExpression)
{
    let check=false
    arrayOfExpression.forEach(
        (element)=>{
            if(!string.match(element))
            {
                
               check= true;
            }
          
        }
    )
        return check
}