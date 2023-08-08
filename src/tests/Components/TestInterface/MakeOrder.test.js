import { render, screen } from "@testing-library/react"
import MakeOrder from "../../../Components/TestInterface/MakeOrder"
const elements=(number)=>{
    const el=[]

    for(let i=1; i<=number; i++)
    {
        el.push({
            id:i,
            text: 'element o id: '+i,
            
        })
    }
    return el
}
const isValid=jest.fn()
const answersController=jest.fn()

describe('test Make Order Component', ()=>{
    it('test component render correctly', ()=>{
        const array=elements(4)
        render(<MakeOrder squares={array} isValid={isValid} answersController={answersController}/>)

        const square=screen.getByText( 'element o id: 1')
        const squares=screen.getAllByText('element o id: ', {exact: false});

        expect(square).toBeInTheDocument()
        expect(squares).toHaveLength(4)
})
})