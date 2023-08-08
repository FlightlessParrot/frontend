import { act, render, screen, waitFor } from "@testing-library/react"
import Pager from "../../../Components/Pager/Pager"
import userEvent from "@testing-library/user-event"



const createDummyData=(howManyPerPage, howManyElements)=>{

    const createElement=(page,element)=>{
        return    <div key={element}>
            <p>page: {page}</p>
            <p>element nr: {element}</p>
        </div>
    }
    const elements=[]
    for(let i=1;i<=howManyElements; i++)
    {
    const element=createElement(Math.ceil(i/howManyPerPage),i)
    elements.push(element)
    }
    return elements;

}
const data=createDummyData(5,100)
describe('test Pager component',()=>{
    it('test component render properly first page',()=>{
        render(<Pager blocks={data} howManyPerPage={5} />)

        const elements= screen.getAllByText('page: 1');
        const anotherPage=screen.queryAllByText('page: 2')
        const buttons=screen.getAllByRole('button');
        expect(anotherPage).toHaveLength(0)
        expect(elements).toHaveLength(5);
        expect(buttons).toHaveLength(11)
    })
    it('test user can use next button',async ()=>{
        render(<Pager blocks={data} howManyPerPage={5} />)

        const next=screen.getByTestId('next');
        const elements= screen.getAllByText('page: 1');
        act(()=>{
            userEvent.click(next)
        })
        const secondElements=screen.queryAllByText('page: 2')
        await waitFor(()=>expect(secondElements).toHaveLength(5))
        await waitFor(()=>expect(elements[3]).not.toBeInTheDocument())
    })
    it('test user can use last button',async ()=>{
        render(<Pager blocks={data} howManyPerPage={5} />)

        const last=screen.getByTestId('last');
        const elements= screen.getAllByText('page: 1');
        act(()=>{
            userEvent.click(last)
        })
        const secondElements=screen.queryAllByText('page: 20')
        await waitFor(()=>expect(secondElements).toHaveLength(5))
        await waitFor(()=>expect(elements[3]).not.toBeInTheDocument())
    })
    it('test user can use back button',async ()=>{
        render(<Pager blocks={data} howManyPerPage={5} />)

        const next=screen.getByTestId('next');
        const back=screen.getByTestId('back');
        const elements= screen.getAllByText('page: 1');
        act(()=>{
            userEvent.click(next)
            userEvent.click(back)
        })
        const secondElements=screen.queryAllByText('page: 2')
        
        await waitFor(()=>expect(elements[3]).toBeInTheDocument())
        await waitFor(()=>expect(secondElements).toHaveLength(0))
    })
    it('test user can use first button',async ()=>{
        render(<Pager blocks={data} howManyPerPage={5} />)

      
        const elements= screen.getAllByText('page: 1');
        const last=screen.getByTestId('last');
        const first=screen.getByTestId('first')
        act(()=>{
            userEvent.click(last)
            userEvent.click(first)

        })
        const secondElements=screen.queryAllByText('page: 2')
        
        await waitFor(()=>expect(elements[3]).toBeInTheDocument())
        await waitFor(()=>expect(secondElements).toHaveLength(0))
    })
    it('test user can use number button',async ()=>{
        render(<Pager blocks={data} howManyPerPage={5} />)

      
        const elements= screen.getAllByText('page: 1');
        const numberButton=screen.getByText('3')
      
        act(()=>{
            userEvent.click(numberButton)

        })
        const secondElements=screen.queryAllByText('page: 3')
        
        await waitFor(()=>expect(elements[3]).not.toBeInTheDocument())
        await waitFor(()=>expect(secondElements).toHaveLength(5))
    })
})