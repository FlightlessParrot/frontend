import { act, render, screen } from "@testing-library/react"
import Square from "../../../Components/Squares/Square"
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
describe('test square component', ()=>{
    
    
    it('test render correctly', ()=>
    {
        const clickHandler=jest.fn()  
        render(<Square color='red' element={elements(1)[0]} clickHandler={clickHandler} />)
        const square=screen.getByText('element o id: 1');

    expect(square).toBeInTheDocument()
    })

    it('test user can click', ()=>
    {
        const clickHandler=jest.fn()  
        render(<Square color='red' element={elements(1)[0]} clickHandler={clickHandler} />)
        const square=screen.getByText('element o id: 1');
        act(
            ()=>userEvent.click(square)
        )
    expect(square).toBeInTheDocument()
    expect(clickHandler).toBeCalledTimes(1)
    })



})