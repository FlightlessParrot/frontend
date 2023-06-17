import { Form, Link, Navigate, redirect, useActionData, useLoaderData,  } from "react-router-dom";

import { Checkbox, FormControl, FormErrorMessage, FormLabel, Input, useDisclosure } from "@chakra-ui/react";
import {  useState } from "react";
import { QuestLoginLayout } from "../../Components/Layouts/QuestLoginLayout";
import MyAlert from "../../Components/Alerts/MyAlert";
import { alertData } from "../../Data/AlertData";

export default function Login()
{
    const [login, setLogin]=useState('')
    const [password, setPassword]=useState('')
    const [neverLogOut, setNeverLogOut]=useState(false)
    const [wasLoginTouched, touchLogin]=useState(false)
    const [wasPasswordTouched, touchPassword]=useState(false)
    const {isOpen, onOpen, onClose}=useDisclosure()
    const loaderData=useLoaderData();
    const actionData=useActionData();
   
    const errorLogin=login==='' && wasLoginTouched;
    const errorPassword=password===''&& wasPasswordTouched;
    
   
    return(
       <QuestLoginLayout>
                {( actionData) && <Navigate to='/user' replace={true}/>}
                <div className="bg-odra md:w-[500px] py-4 px-8 pt-12 rounded-md">
                    <h1 className="lead mb-8"> Zaloguj</h1>
                    <Form method='post'>
                        {actionData===false && <MyAlert isOpen={isOpen} onClose={onClose}  {...alertData.login}/>}

                       <FormControl isInvalid={errorLogin}>
                        <FormLabel >e-mail</FormLabel>
                        <Input required project='project' name='email'  value={login} onChange={(e)=>setLogin(e.currentTarget.value)} onBlur={()=>touchLogin(true)}/>
                        <FormErrorMessage>Podaj nazwę użytkownika.</FormErrorMessage>
                        </FormControl> 
                        <FormControl isInvalid={errorPassword}>
                        <FormLabel mt='20px'>Hasło</FormLabel>
                        <Input required type='password' variant='outline' project='project'  name='password' onChange={(e)=>setPassword(e.currentTarget.value)} value={password} onBlur={()=>touchPassword(true)}/>
                        <FormErrorMessage>Podaj hasło.</FormErrorMessage>
                           
                        </FormControl> 
                        <FormControl className="flex items-scenter gap-2 my-6">
                        <Checkbox name='remember' className="mb-2" value={neverLogOut} onChange={(e)=>setNeverLogOut(e.target.checked)}></Checkbox> <FormLabel className="m-0">Zapamiętaj mnie</FormLabel>
                       </FormControl>
                       <div className=" flex justify-end" onClick={onOpen}><button className="m-0 action-button  ">
                            Zaloguj
                        </button> </div>
                       <div className="my-4">
                        <Link className="inline-block classic-link my-1" to='/forgot-password'>Nie pamiętam hasła</Link>
                        <p className="my-1">Nie masz konta? <Link className="classic-link" to='/register'>Zarejestruj</Link></p>
                        </div> 
                    </Form>
                  
                </div>
                </QuestLoginLayout>
        
    )
}