
import ContactData from "./Forms/ContactData"
import Message from "./Forms/Message"
import DefaultFieldsInstruction from "./Forms/DefaultFieldsInstruction"
import { useState } from "react"
import { Form } from "react-router-dom"


export default function MessageToTech(props)
{
   const [error, setError]=useState(true)
   const clickHandler=(e)=>
   {
      console.log(error)
      if(error){
         e.preventDefault();
      }
   }

   return (<>
      <h1 className="article-title-font my-10">{props.title}</h1>
      <div className="relative left-8 md:left-32 w-full border-t-4 border-sel "></div>
         <p className="w-120 ml-8 md:ml-32">
            {props.message}
         </p>
      
      <Form method='post'>
         <ContactData />
         <Message title='Wiadomość' setError={setError} />
         <button className=" action-button float-right " onClick={clickHandler}> {props.buttonText}</button>
        <DefaultFieldsInstruction />
         </Form>
      </>
   )

}