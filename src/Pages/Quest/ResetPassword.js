import { FormControl, FormErrorMessage, FormLabel, Input, useDisclosure } from "@chakra-ui/react";
import { Form, useActionData, useParams, useSearchParams } from "react-router-dom";
import { QuestLoginLayout } from "../../Components/Layouts/QuestLoginLayout";
import { useState } from "react";
import MyAlert from "../../Components/Alerts/MyAlert";
import { alertResetPasswordData } from "../../Data/AlertData";

export default function ResetPassword() {
    const [params, setParams]=useSearchParams();
    const {passwordReset}=useParams()
    const actionData=useActionData()
    const {isOpen, onOpen, onClose}=useDisclosure()

    const [password, setPassword]=useState('');
    const [wasPasswordTouched, touchPassword]=useState(false);
    const [confirmPassword, setConfirmPassword]=useState('');
    
    const errorPassword= wasPasswordTouched && notMatch(password, [/[A-Z]+/,/[0-9]+/,/.{8}/, /[a-z]+/ ]) 
    const errorConfirm=wasPasswordTouched && password!==confirmPassword

    return(
        <QuestLoginLayout>
             <div className="bg-odra md:w-[500px] py-4 px-8 pt-12 rounded-md">
                {actionData &&<MyAlert isOpen={isOpen} onClose={onClose} {...alertResetPasswordData.positive} />}
                
                    <h1 className="lead mb-8"> Podaj nowe hasło</h1>
        <Form method='post'>
            <input tpye='password' readOnly className="hidden" value={passwordReset} name='token' />
            <input type='email' value={params.get('email')} readOnly className="hidden"  name='email' />
            <FormControl isInvalid={errorPassword}>
                <FormLabel>Hasło</FormLabel>
            <Input type='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value.trim())} onBlur={(e)=>touchPassword(true)} required project='project' />
            <FormErrorMessage>Hasło musi się składać z conajmniej 8 znaków, zawierać małe i duże litery oraz cyfry.</FormErrorMessage>
            </FormControl>
           
            <FormControl isInvalid={errorConfirm} >
                <FormLabel marginTop={'16px'}>Powtórz hasło</FormLabel>
            <Input name='password_confirmation' type='password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value.trim())} required project='project' />
            <FormErrorMessage>Hasła nie są identyczne.</FormErrorMessage>
            </FormControl>
        <button className="action-button" onClick={onOpen}>Zmień hasło</button> 
        </Form></div>
        </QuestLoginLayout>
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