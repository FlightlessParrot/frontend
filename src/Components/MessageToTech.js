
import ContactData from "./Forms/ContactData"
import Message from "./Forms/Message"
import DefaultFieldsInstruction from "./Forms/DefaultFieldsInstruction"

import { Form } from "react-router-dom"
import MyAlert from "./Alerts/MyAlert";
import { alertData } from "../Data/alertData";
import { useActionData } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react"

export default function MessageToTech(props)
{

   const {isOpen, onOpen, onClose}=useDisclosure();
  
  
   const actionData=useActionData()

  
   return (<> 
      {actionData && <MyAlert isOpen={isOpen} onClose={onClose} {...alertData.positive} />}
      {actionData===false  && <MyAlert isOpen={isOpen} onClose={onClose}  {...alertData.negative} />}
      <h1 className="article-title-font my-10">{props.title}</h1>
      <div className="relative left-8 md:left-32 w-full border-t-4 border-sel "></div>
         <p className="w-120 ml-8 md:ml-32">
            {props.message}
         </p>
      
      <Form onSubmit={(e)=>{onOpen()
      e.target.reset()
         console.log(e.target)
   }
      } method='post'>
     
         <ContactData />
         <Message title='Wiadomość' />
         <button className=" action-button float-right "> {props.buttonText}</button>
        <DefaultFieldsInstruction />
         </Form>
      </>
   )

}