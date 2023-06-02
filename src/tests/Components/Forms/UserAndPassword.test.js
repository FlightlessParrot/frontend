import { screen, render } from "@testing-library/react"
import { UserAndPassword } from "../../../Components/Forms/UserAndPassword"
import UserEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"

describe('test User and Password form',()=>{
    it('check if form  is present',()=>{
        render(<UserAndPassword />)
        
        const loginForm=screen.getByLabelText('e-mail')
        const passwordForm=screen.getByLabelText('Hasło')
        const passwordConfirmationForm=screen.getByLabelText('Powtórz hasło')

        expect(loginForm).toBeInTheDocument();
        expect(passwordForm).toBeInTheDocument();
        expect(passwordConfirmationForm).toBeInTheDocument();
    })
    it('check if validation appear',()=>{
    render(<UserAndPassword />)
    const loginForm=screen.getByLabelText('e-mail')
    const passwordForm=screen.getByLabelText('Hasło')
    const passwordConfirmationForm=screen.getByLabelText('Powtórz hasło') 
        
    act(()=>{
        UserEvent.type(loginForm, 'piesek@kot')
        UserEvent.type(passwordForm,'1223aaaaaaaaw')
        UserEvent.type(passwordConfirmationForm,'1')
    })

    const loginError=screen.getByText('Podaj e-mail.')
    const passwordError=screen.getByText('Hasło musi się składać', {exact: false})
    const confirmationError=screen.getByText('identyczne', {exact: false})

    expect(loginError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
    expect(confirmationError).toBeInTheDocument();
})
it('check if validation dissappear',()=>{
    render(<UserAndPassword />)
    const loginForm=screen.getByLabelText('e-mail')
    const passwordForm=screen.getByLabelText('Hasło')
    const passwordConfirmationForm=screen.getByLabelText('Powtórz hasło') 
        
    act(()=>{
        UserEvent.type(loginForm, 'piese@kot.pl')
        UserEvent.type(passwordForm,'12323ASDAaaaa')
        UserEvent.type(passwordConfirmationForm,'12323ASDAaaaa')
    })
    const loginError=screen.queryByText('Podaj e-mail.')
    const passwordError=screen.queryByText('Hasło musi się składać', {exact: false})
    const confirmationError=screen.queryByText('identyczne', {exact: false})

    expect(loginError).not.toBeInTheDocument();
    expect(passwordError).not.toBeInTheDocument();
    expect(confirmationError).not.toBeInTheDocument();

})
})

