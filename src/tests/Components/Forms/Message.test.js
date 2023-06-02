import { fireEvent, render, screen } from "@testing-library/react"
import Message from "../../../Components/Forms/Message"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils";


describe('Message tests', ()=>{ 
    const mockFunction=jest.fn()
    it('check if message forms works correctly', ()=>{
       
       render(<Message setError={mockFunction} />)
       const input=screen.getByTestId('message-input')
       const textarea=screen.getByLabelText('Treść')

        expect(textarea).toBeNull;
        expect(input).toBeNull;
        
        act(()=>{
        userEvent.type(input, '123')
        userEvent.type(textarea, '456')})

        expect(input).toHaveValue('123')
        expect(textarea).toHaveValue('456')
        expect(mockFunction).toBeCalledWith(false)
    });
    it('check if message validation works',
    ()=>{
    render(<Message setError={mockFunction} />)
        const input=screen.getByTestId('message-input')
        const textarea=screen.getByLabelText('Treść')

        act(()=>{
        fireEvent.focus(input)
        fireEvent.blur(input)
        fireEvent.focus(textarea)
        fireEvent.blur(textarea)
        })
        const firstErrorText=screen.getByTestId('errorInputMessage')
        expect(firstErrorText).toBeInTheDocument();
        const secondErrorText=screen.getByText('Podaj treść wiadomości')
        expect(secondErrorText).toBeInTheDocument();
        expect(mockFunction).toBeCalledWith(true)
        expect(mockFunction).not.toBeCalledWith(false)
        act(()=>{
            userEvent.type(input, '123')
            userEvent.type(textarea, '456')})

        expect(firstErrorText).not.toBeInTheDocument();
        expect(secondErrorText).not.toBeInTheDocument();
        expect(mockFunction).toBeCalledWith(false);

    })
   
})