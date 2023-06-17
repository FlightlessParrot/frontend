import { FormControl, FormErrorMessage, Input, FormLabel } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';


export const UserAndPassword = (props) => {
    const [mail, setMail]=useState('')
    const [wasMailTouched, touchMail ]=useState(false)
    const errorMail= wasMailTouched &&  (mail==='' || !(mail.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ ))) 
    
    const [password, setPassword]=useState('');
    const [wasPasswordTouched, touchPassword]=useState(false);
    const [confirmPassword, setConfirmPassword]=useState('');
    
    const errorPassword= wasPasswordTouched && notMatch(password, [/[A-Z]+/,/[0-9]+/,/.{8}/, /[a-z]+/ ]) 
    const errorConfirm=wasPasswordTouched && password!==confirmPassword
    useEffect(
        ()=>{
            if(wasMailTouched && wasPasswordTouched && !errorPassword && !errorConfirm)
            {
                props.setError(false)
            }else{
                props.setError(true)
            }
        },[wasMailTouched, wasPasswordTouched, errorPassword, errorConfirm]
    )
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

    return(
        <div className='flex flex-col gap-10 m-10'><div>
            <FormControl  isInvalid={errorMail}>
                <FormLabel>e-mail</FormLabel>
            <Input name='email' value={mail} onChange={(e)=>setMail(e.target.value)} onBlur={(e)=>touchMail(true)} required project='project' type='email' />
            <FormErrorMessage>Podaj e-mail.</FormErrorMessage>
            </FormControl></div>
            <div className='grid lg:auto-cols-fr gap-4'>
            <div className='col-start-1'>
            <FormControl isInvalid={errorPassword}>
                <FormLabel>Hasło</FormLabel>
            <Input type='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value.trim())} onBlur={(e)=>touchPassword(true)} required project='project' />
            <FormErrorMessage>Hasło musi się składać z conajmniej 8 znaków, zawierać małe i duże litery oraz cyfry.</FormErrorMessage>
            </FormControl></div>
            <div className='min-w-32 lg:col-start-2'>
            <FormControl isInvalid={errorConfirm} >
                <FormLabel>Powtórz hasło</FormLabel>
            <Input type='password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value.trim())} required project='project' />
            <FormErrorMessage>Hasła nie są identyczne.</FormErrorMessage>
            </FormControl></div></div>
        </div>
    );
};

export {UserAndPassword as default}
