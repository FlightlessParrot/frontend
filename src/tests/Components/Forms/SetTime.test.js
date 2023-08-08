import { fireEvent, render, screen } from "@testing-library/react";
import SetTime from "../../../Components/Forms/SetTime";
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils";
describe('test SetTime Component', ()=>{
it('test render correctly', ()=>{
    render(<SetTime />)

    const option= screen.getByText('01:00:00')
    const options= screen.getAllByRole('option')

    const label=screen.getByText('Wybierz czas trwania testu')
    const error=screen.queryByText('Wybierz czas trwania testu.')

    expect(option).toBeInTheDocument()
    expect(options).toHaveLength(10)

    expect(label).toBeInTheDocument()
    expect(error).not.toBeInTheDocument()
})
it('test walidation works', ()=>{
    render(<SetTime />)
    const select=screen.getByRole('combobox')
    act(()=>{

        fireEvent.blur(select)
    })
    const error=screen.queryByText('Wybierz czas trwania testu.')
    expect(error).toBeInTheDocument()
})
it('test user can chose option', ()=>{
    render(<SetTime />)
    
    const select=screen.getByRole('combobox')

    act(
        ()=>userEvent.selectOptions(select,'01:00:00')
    )
    const error=screen.queryByText('Wybierz czas trwania testu.')
    expect(select).toHaveValue(('01:00:00').toString());
    expect(error).not.toBeInTheDocument()
})
})