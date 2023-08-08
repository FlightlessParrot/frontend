import userEvent from "@testing-library/user-event"
import { render, screen, act } from "@testing-library/react"
import Switcher from "../../../Components/Forms/Switcher"
const fn=jest.fn()
describe('test Switcher component', ()=>{
    it('test component renders correctly', ()=>{
        render(<Switcher name='name' value='value' label='label' onChange={fn} isChecked={true} />)
        const switcher=screen.getByLabelText('label')

      
        expect(switcher).toBeChecked();
        expect(switcher.value).toBe('value')
    })
    it('test onChange method is called when user click',()=>{
        render(<Switcher name='name' value='value' label='label' onChange={fn} isChecked={true} />)
        const switcher=screen.getByLabelText('label')

        act(
            ()=>{
                userEvent.click(switcher)
            }
        );

        expect(fn).toBeCalledTimes(1)
    })
})