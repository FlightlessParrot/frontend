import {  render, screen } from "@testing-library/react";
import MessageToTech from '../../Components/MessageToTech'

import UserEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils";
jest.mock("react-router-dom", ()=>{
    const original=jest.requireActual("react-router-dom")
    return { 
    __esModule: true,
    ...original,
    Form: (props)=>{return <form>{props.children}</form>},

   
}})



describe('Message to tech tests',()=>{

    it('check if form get value',()=>{

    
       
        render(<MessageToTech />)

        const ContactInput=screen.getByLabelText('e-mail*')
        const MessageInput=screen.getByLabelText('Tytuł')
        const textarea=screen.getByLabelText('Treść')
        const titleSelector=screen.getByLabelText('Tytuł*')
        act(()=>{
        UserEvent.type(ContactInput,'123')
        UserEvent.type(MessageInput,'456' )
        UserEvent.type(textarea, 'message')
        UserEvent.selectOptions(titleSelector,'Pani')})

        expect(ContactInput).toHaveValue('123')
        expect(MessageInput).toHaveValue('456')
        expect(textarea).toHaveValue('message')
        expect(titleSelector).toHaveValue('Pani')
    })
   
  

})

