import { screen, render, act } from "@testing-library/react";
import UserCard from "../../../Components/Cards/UserCard";
import userEvent from "@testing-library/user-event";


describe('test User Card Component', ()=>{
    const user={
        name: 'name',

        email: 'test@mail.com',
        id: 1
    }
    const fn=jest.fn();
    it('test component render correctly', ()=>{
        render(<UserCard userModel={user} getUserIdOnClick={fn} members={[]} />);

        const name=screen.getByText('name', {exact: false});
        
        const mail=screen.getByText('test@mail.com', {exact: false});
        const id=screen.getByText(1, {exact: false})

        expect(name).toBeInTheDocument()
       
        expect(mail).toBeInTheDocument()
        expect(id).toBeInTheDocument()

    })

    it('test user can choose user', ()=>{
        render(<UserCard userModel={user} getUserIdOnClick={fn} members={[]} />); 
        const button=screen.getByRole('button')

        act(
            ()=>userEvent.click(button)
        )

        expect(fn).toBeCalledWith(1)
    })
    
    
})