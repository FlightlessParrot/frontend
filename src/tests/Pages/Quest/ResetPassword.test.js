import { render, screen } from "@testing-library/react"
import ResetPassword from "../../../Pages/Quest/ResetPassword"

import userEvent from '@testing-library/user-event'
import { act } from "react-dom/test-utils"
jest.mock("../../../Components/Layouts/QuestLoginLayout",()=>{return {__esModule:true, QuestLoginLayout: (props)=><div>{props.children}</div>}})
jest.mock("react-router-dom",()=>{

    return{
        __esModule: true,
        Form:(props)=><div>{props.children}</div>,
        useActionData: ()=>false,
        useSearchParams: ()=>[{get:(string)=>string},()=>false],
        useParams:()=> [123],
        Link: ()=><a> </a>,
        NavLink: ()=><a></a>
    }
})

describe('test ResetPassword Page',()=>{
    it('check if component render correctly',()=>{
        render(<ResetPassword />)
        const passError=screen.queryByText('Hasło musi się składać z conajmniej 8 znaków',{exact: false})
        const confError=screen.queryByText('Hasła nie są identyczne.')
        const pass=screen.getByLabelText('Hasło')
        const conf=screen.getByLabelText('Powtórz hasło')

        expect(pass).toBeInTheDocument()
        expect(conf).toBeInTheDocument()
        expect(passError).not.toBeInTheDocument()
        expect(confError).not.toBeInTheDocument()


    }),
    it('check if validation appear',()=>{
        render(<ResetPassword />)
        
        const pass=screen.getByLabelText('Hasło')
        const conf=screen.getByLabelText('Powtórz hasło')
        act(()=>{
            userEvent.type(pass,'123')
            userEvent.type(conf,'456')
        })

        const passError=screen.queryByText('Hasło musi się składać z conajmniej 8 znaków',{exact: false})
        const confError=screen.queryByText('Hasła nie są identyczne.')
        expect(passError).toBeInTheDocument()
        expect(confError).toBeInTheDocument()
    });
    it('check if validation hidden',()=>{
        render(<ResetPassword />)
        
        const pass=screen.getByLabelText('Hasło')
        const conf=screen.getByLabelText('Powtórz hasło')
        act(()=>{
            userEvent.type(pass,'123')
            userEvent.type(conf,'1')
            userEvent.type(pass,'absdddddDDDDDDDD')
            userEvent.type(conf,'23absdddddDDDDDDDD')
        })

        
        const passError=screen.queryByText('Hasło musi się składać z conajmniej 8 znaków',{exact: false})
        const confError=screen.queryByText('Hasła nie są identyczne.')
        expect(passError).not.toBeInTheDocument()
        expect(confError).not.toBeInTheDocument()
    });
})