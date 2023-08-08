import { act, render, screen } from "@testing-library/react"
import MakePairs from "../../../Components/TestInterface/MakePairs"
import userEvent from "@testing-library/user-event"

const elements=(number)=>{
    const el=[]

    for(let i=1; i<=number; i++)
    {
        el.push({
            id:i,
            text: 'element o id: '+i
            
        })
    }
    return el
}
const fn=jest.fn()
describe('test MakePairs component', ()=>{
    it('test component render correctly', ()=>{
        const jsxArray=elements(4)
        render(<MakePairs squares={jsxArray} answersController={fn} isValid={fn} />)

        const squares=screen.getAllByText('element o id: ', {exact: false})
        const square=screen.getByText('element o id: 2')
        const anotherSquare=screen.getByText('element o id: 3')

        expect(squares).toHaveLength(4)
        expect(square).toBeInTheDocument()
        expect(anotherSquare).toBeInTheDocument()
    })
    it('test if clicked squares render correctly', ()=>{
        const jsxArray=elements(4)
        render(<MakePairs squares={jsxArray} answersController={fn} isValid={fn}  />)

        const squares=screen.getAllByText('element o id: ', {exact: false})
        const square=screen.getByText('element o id: 2')
        const anotherSquare=screen.getByText('element o id: 3')

        act(
            ()=>{
                userEvent.click(square)
                userEvent.click(anotherSquare)
            }
        )

        expect(fn).toBeCalledTimes(4)
        expect(squares).toHaveLength(4)
        expect(square).not.toBeInTheDocument()
        expect(anotherSquare).not.toBeInTheDocument()
    })
})