import { getByText, render, screen, waitFor } from "@testing-library/react"
import CustomTestSwitcher from "../../../Components/Forms/CustomTestSwitcher"
import universalFetchSchema from "../../../fetch/universalFetchSchema"
import { useLoaderData } from "react-router-dom"
import { act } from "react-dom/test-utils"
import userEvent from "@testing-library/user-event"
jest.mock("../../../fetch/universalFetchSchema",()=>async ()=>[{id: 0, name: 'testI'},{id: 1, name: 'testII'}])
jest.mock("react-router-dom",()=>{
    const module=jest.requireActual("react-router-dom");
    return {
        esModule: true,
        ...module,
        useLoaderData: ()=>[{id: 0, name: 'testI'},{id: 1, name: 'testII'}]
    }
})
jest.useFakeTimers(
        )
describe('test CustomTestSwitcher Component', ()=>{
    it('test renders correctly',async ()=>{
        
        act(()=> {render(<CustomTestSwitcher />)
        jest.advanceTimersByTime(1000)}
        )



        const option=screen.getByText('testI')
        const select=screen.getByRole('combobox')
        const checkbox=screen.getByRole('checkbox')
        await waitFor(()=>{
        expect(option).toBeInTheDocument()
        expect(select).toBeInTheDocument()
        expect(checkbox).toBeInTheDocument()
        expect(checkbox).not.toBeChecked()
        })
    })
    it('test user can check',async ()=>{
       render(<CustomTestSwitcher />)
        
        
       
    
        const checkbox=screen.getByRole('checkbox')

        act(()=>{
            userEvent.click(checkbox)
        })
        await waitFor(()=>{
        expect(checkbox).toBeChecked();
        })
    })
    it('test user can uncheck', async ()=>{
     render(<CustomTestSwitcher />)


       
       const checkbox=screen.getByRole('checkbox')

        act(()=>{
            userEvent.dblClick(checkbox)
           
        })
        await waitFor(()=>{
        expect(checkbox).not.toBeChecked();
        })
    })
})