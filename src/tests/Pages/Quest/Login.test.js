import { fireEvent, render, screen } from "@testing-library/react"
import Login from "../../../Pages/Quest/Login"
import UserEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"
import { useActionData } from "react-router-dom"
jest.mock("react-router-dom", ()=>{
    const original=jest.requireActual("react-router-dom")
    return { 
    __esModule: true,
    ...original,
    Form: (props)=>{return <form onSubmit={(e)=>e.preventDefault()}>{props.children}</form>},
    Link: (props)=>{return <a href=''>{props.children}</a>},
    NavLink: (props)=>{return <a href=''>{props.children}</a>},
    useLoaderData: ()=>false,
    useActionData: ()=>false
}})
jest.mock('../../../Components/Layouts/QuestLoginLayout',()=>{
    return{
        QuestLoginLayout: (props)=><div>{props.children}</div>
    }
})

describe('Testuj Logowanie użytkownika',()=>
{
    
    it('check if form is present', ()=>
    {
   
        render(<Login />)

        const login=screen.getByLabelText('e-mail')
        const password=screen.getByLabelText('Hasło')
        const checkbox=screen.getByLabelText('Zapamiętaj mnie')

        expect(login).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(checkbox).toBeInTheDocument();
        
    }),
    it('check if form works',()=>{
        render(<Login />)
        const login=screen.getByLabelText('e-mail')
        const password=screen.getByLabelText('Hasło')
        const checkbox=screen.getByLabelText('Zapamiętaj mnie')

        act(
            ()=>{
                UserEvent.type(login,'123')
              UserEvent.type(password,'456')
              UserEvent.click(checkbox)
            }
        )

        expect(login).toHaveValue('123')
        expect(password).toHaveValue('456')
        expect(checkbox).toBeTruthy()


    })
    it('check if validation appear', ()=>{
        render(<Login />)

        const login=screen.getByLabelText('e-mail')
        const password=screen.getByLabelText('Hasło')

        act(
            ()=>{
              fireEvent.blur(login)
              fireEvent.blur(password)  
            }
        )

        const loginError=screen.queryByText('Podaj nazwę użytkownika.')
        const passwordError=screen.queryByText('Podaj hasło.')

        expect(loginError).toBeInTheDocument()
        expect(passwordError).toBeInTheDocument()
    }),
    it('check if validation dissappear',()=>{
        render(<Login />)

        const login=screen.getByLabelText('e-mail')
        const password=screen.getByLabelText('Hasło')

        act(
            ()=>{
              fireEvent.blur(login)
              fireEvent.blur(password)  
              UserEvent.type(login,'123')
              UserEvent.type(password,'123')
            }
        )
        const loginError=screen.queryByText('Podaj nazwę użytkownika.')
        const passwordError=screen.queryByText('Podaj hasło.')

        expect(loginError).not.toBeInTheDocument()
        expect(passwordError).not.toBeInTheDocument()
    })
})