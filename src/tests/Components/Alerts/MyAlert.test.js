import { render,screen } from "@testing-library/react"
import { alertData } from "../../../Data/AlertData"
import MyAlert from "../../../Components/Alerts/MyAlert"
import userEvent from "@testing-library/user-event"
import { act } from "react-test-renderer"
describe('test MyAlert Component',()=>{
    it('test Alert render correctly',()=>{
        let visible=true
        const fn=jest.fn()  
        render(<MyAlert  isOpen={visible} onClose={fn} {...alertData.positive} />)

        const title=screen.getByText(alertData.positive.title)
        const description=screen.getByText(alertData.positive.description)
        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();


    })
    it('test close button works',()=>{
        let visible=true
        const fn=jest.fn()  
        render(<MyAlert  isOpen={visible} onClose={fn} {...alertData.negative} />)
        const title=screen.getByText(alertData.negative.title)
        const description=screen.getByText(alertData.negative.description)
        const button=screen.getByRole('button')
        act(()=>{
            userEvent.click(button)
        }
        )
        expect(fn).toBeCalledTimes(1)
        
    })
})