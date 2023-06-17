import { fireEvent, render, screen } from "@testing-library/react"
import RemindPassword from "../../../Pages/Quest/RemindPassword"
import { act } from "react-test-renderer"
import userEvent from "@testing-library/user-event"

jest.mock("../../../Components/Layouts/QuestLoginLayout",()=>{return {__esModule:true, QuestLoginLayout: (props)=><div>{props.children}</div>}})
jest.mock("react-router-dom",()=>{
    const Module=jest.requireActual("react-router-dom")
    return{
        __esModule: true,
        ...Module,
        Form:(props)=><div>{props.children}</div>,
        useActionData: ()=>false,
        Link: (props)=><a> {props.children}</a>,
        NavLink: ()=><a></a>
    }
})
describe('test Remind Password', ()=>{
    it('test component renders properly',()=>{
        render(<RemindPassword />)
        const input=screen.getByLabelText('Podaj mail', {exact: false})
        const error=screen.queryByText('Wprowadź poprawny', {exact: false})

        expect(input).toBeInTheDocument();
        expect(error).not.toBeInTheDocument()

    })
    it('test input works',()=>
    {
        render(<RemindPassword />)

        const input=screen.getByLabelText('Podaj mail', {exact: false})
        act(()=>{
            userEvent.type(input,'malpa');
        })

        expect(input).toHaveValue('malpa')
    });
    it('test validation shows error before blur',()=>{
        render(<RemindPassword />)
        
        const input=screen.getByLabelText('Podaj mail', {exact: false})
       

        act(()=>{
            userEvent.type(input,'mail')
            fireEvent.blur(input)
        }) 
        const error=screen.getByText('Wprowadź poprawny adres e-mail.')
        expect(error).toBeInTheDocument();
    });
    
   
})