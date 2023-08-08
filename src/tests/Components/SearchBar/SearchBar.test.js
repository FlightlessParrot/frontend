import { act, fireEvent, render, screen } from "@testing-library/react"
import SearchBar from "../../../Components/SearchBars/SearchBar"
import userEvent from "@testing-library/user-event"
const onChangeMockery= jest.fn((e)=>e.target.value)
const onSubmitMockery=jest.fn()
describe('test Search Bar input component', ()=>{
    it('check if component render correctly', ()=>{
        render(<SearchBar labelText={'Wyszukaj'} onChange={onChangeMockery} value={'123'} />)
        const input=screen.getByLabelText('Wyszukaj')
        const button=screen.getByRole('button')
        const label=screen.getByText('Wyszukaj')
        expect(input).toBeInTheDocument()
        expect(input).toHaveValue('123')
        expect(button).toBeInTheDocument()
        expect(label).toBeInTheDocument()
    })
    it('check if input works properly', ()=>{
        render(<SearchBar labelText={'Wyszukaj'} onChange={onChangeMockery} onClick={onSubmitMockery}  value={'123'} />);
        const input=screen.getByLabelText('Wyszukaj')
        const button=screen.getByRole('button')

    
        act(()=>{
            userEvent.type(input, '123')
            userEvent.click(button)
            
        })
        expect(onChangeMockery).toBeCalledTimes(3)
        expect(onSubmitMockery).toBeCalledTimes(1)
        
    })
})