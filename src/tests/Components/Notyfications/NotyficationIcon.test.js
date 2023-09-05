
import renderer, { act } from "react-test-renderer"
import NotyficationIcon from "../../../Components/Notyfications/NotyficationIcon"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
const fn=jest.fn()
describe('test Notyfication Icon component',()=>{
    it('test coponent render correctly',()=>{
       const icon= renderer.create(<NotyficationIcon onClick={fn} />).toJSON()
       expect(icon).toMatchSnapshot()
    })
    it('test onClick function works',()=>{
        render(<NotyficationIcon onClick={fn} />)
        const button=screen.getByRole('button')
        act(
            ()=>{
                userEvent.click(button)
            }
        )
        expect(fn).toBeCalledTimes(1);
    })
})