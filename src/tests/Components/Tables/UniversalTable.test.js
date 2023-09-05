import { render, screen } from "@testing-library/react"
import UniversalTable from "../../../Components/Tables/UniversalTable"


describe('test Universal Table component',()=>{
const data=[
    {name: 'theName',
    surname: 'theSurname'},
    {name: 'anotherName',
    surname: 'anotherSurname'}
]
it('test component render correctly',  ()=>{
    render(<UniversalTable data={data} headersObject={{name: 'name',
    surname: 'surname'}} name="Names and Surnames"/>)

    const names=screen.getAllByText('ame', {exact: false})
    const category=screen.getByText('surname')
    const theName=screen.getByText('theName')
    const title=screen.getByText("Names and Surnames")
    const anotherSurname=screen.getByText('anotherSurname');
    expect(names).toHaveLength(7)
    expect(category).toBeInTheDocument()
    expect(theName).toBeInTheDocument()
    expect(anotherSurname).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    
})

})