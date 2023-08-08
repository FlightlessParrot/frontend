import { act, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import NumberSquare from "../../../Components/Squares/NumberSquare"
const elements=(number)=>{
    const el=[]

    for(let i=1; i<=number; i++)
    {
        el.push({
            id:i,
            text: 'element o id: '+i,
            color: 'red',
            number: i
        })
    }
    return el
}
describe('test NumberSquare component',()=>{
    it('test component render correctly',()=>{
        render(<NumberSquare element={elements(2)[0]} />  )
        const element=screen.getByText('element o id: 1')
        const number=screen.getByText('1')
        const numberButton=screen.queryByText('2')

        expect(element).toBeInTheDocument()
        expect(number).toBeInTheDocument()
        expect(numberButton).not.toBeInTheDocument()

    })

    it('test user can open number options', ()=>{
        const fn=jest.fn()
        render(<NumberSquare element={elements(2)[0]} clickHandler={fn}  currentElement={1}><div>2</div>  </NumberSquare>)
        const element=screen.getByText('element o id: 1')
        const number=screen.getByText('1')
        

        act(
            ()=>{
                userEvent.click(element)

            }
        )
        const numberButton=screen.queryByText('2')
        expect(element).toBeInTheDocument()
        expect(number).toBeInTheDocument()
        expect(numberButton).toBeInTheDocument()
        expect(fn).toBeCalledTimes(1)
    })
})