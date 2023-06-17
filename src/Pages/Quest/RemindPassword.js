import { FormControl, FormErrorMessage, FormLabel, Input, useDisclosure } from "@chakra-ui/react";
import { QuestLoginLayout } from "../../Components/Layouts/QuestLoginLayout";
import { useEffect, useState } from "react";
import { useActionData, Form } from "react-router-dom";
import MyAlert from "../../Components/Alerts/MyAlert";
import { alertRemindData } from "../../Data/AlertData";

export default function RemindPassword() {
  const [email, setEmail]=useState('')
  const [wasTouched, touchMail]=useState(false)
  const [error, setError]=useState(false)
  const actionData=useActionData()
  const {isOpen, onOpen, onClose}=useDisclosure()
  useEffect(
    ()=>{
      const match=email.match(/^[a-zA-z0-9-\.\_]+@[a-zA-Z]+\.[a-zA-z]{2,}$/)
      if(wasTouched && !match)
      {
       
        setError(true)
      }if(wasTouched && match)
      {
        setError(false)
      }
    },[email, wasTouched]
  )
  return (
    <QuestLoginLayout>
         <div className="bg-odra md:w-[500px] py-4 px-8 pt-12 rounded-md">
        {actionData && <MyAlert onClose={onClose} isOpen={isOpen} {...alertRemindData.positive}/>} 
       {actionData===false && <MyAlert onClose={onClose} isOpen={isOpen} {...alertRemindData.negative} />}
          <Form method='post'>
          <FormControl isInvalid={error}>
                    <FormLabel className="lead mb-8" >Podaj mail, z którym jest powiązane jest konto </FormLabel>
                      <Input required type='email' placeholder='nazwa@domena.pl' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} onBlur={()=>touchMail(true)}/>
                      <FormErrorMessage>Wprowadź poprawny adres e-mail.</FormErrorMessage>
          </FormControl>
          <button className="action-button" onClick={onOpen}>Resetuj hasło</button>
          </Form>
                    </div>
    </QuestLoginLayout>
  )
}