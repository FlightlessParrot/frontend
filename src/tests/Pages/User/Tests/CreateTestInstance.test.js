
import userEvent from "@testing-library/user-event"
import CreateTestInstance from "../../../../Pages/User/Tests/CreateTestInstance"
import { act, render, screen } from "@testing-library/react"

jest.mock('../../../../Components/Layouts/UserLayout',()=>{

    return{
        TestUserLayout: (props)=><div>{props.children}</div>,
        
        
    }
})

jest.mock('react-router-dom',()=>{
    return{
        Form: props=><form>{props.children}</form>,
        useLoaderData: ()=>({
            standart: [{name: 'Anatomia dla programistów - czyli to, co przegapiłeś w szkole', id: 0},
             {name: 'Podstawy biologii - czyli dlaczego klepanie w kąkuter to nie wszystko', id: 1}],
             custom: [
                {name: 'Jak leczyć uzależnienie od klikania w kąkuter', id: 2}
             ]
         }) 
    }
})
describe('Test create test instance',()=>{
   it('Test if form renders correctly',()=>{
    render(<CreateTestInstance />)
    const numberOption=screen.getByText(20)
    const questionsAll=screen.getByLabelText('Wszystkie', {exact: false})
    const questionsCorrect=screen.getByLabelText('poprawnie', {exact: false})
    const questionsFalse=screen.getByLabelText('błędnie', {exact: false})
    const questionsNone=screen.getByLabelText('nierozwiązane',{exact:false})
    const tests=screen.getAllByText('kąkuter', {exact: false})
    const custom = screen.getByText('własne', {exact: false})

    expect(numberOption).toBeInTheDocument()
    expect(questionsAll).toBeChecked()
    expect(questionsCorrect).toBeChecked()
    expect(questionsFalse).toBeChecked()
    expect(questionsNone).toBeChecked()
    expect(tests).toHaveLength(1)
    expect(custom).toBeInTheDocument()
   });

   it('check if all text displays',()=>{
    render(<CreateTestInstance />)
    const custom = screen.getByLabelText('własne', {exact: false})
    

    act(()=>{
        userEvent.click(custom)
    })
   const tests=screen.getAllByText('kąkuter', {exact: false})
  
   expect(tests).toHaveLength(2)
})

it('check if all-toggle button toggle all off',()=>{
    render(<CreateTestInstance />)
    const questionsAll=screen.getByLabelText('Wszystkie', {exact: false})
    const questionsCorrect=screen.getByLabelText('poprawnie', {exact: false})
    const questionsFalse=screen.getByLabelText('błędnie', {exact: false})
    const questionsNone=screen.getByLabelText('nierozwiązane',{exact:false})

    
    act(()=>{
    userEvent.click(questionsAll) 
  
    })
    expect(questionsCorrect).not.toBeChecked()
    expect(questionsFalse).not.toBeChecked()
    expect(questionsNone).not.toBeChecked()
})

it('check if all-toggle button toggle all on',()=>{
    render(<CreateTestInstance />)
    const questionsAll=screen.getByLabelText('Wszystkie', {exact: false})
    const questionsCorrect=screen.getByLabelText('poprawnie', {exact: false})
    const questionsFalse=screen.getByLabelText('błędnie', {exact: false})
    const questionsNone=screen.getByLabelText('nierozwiązane',{exact:false})

    
    act(()=>{
        userEvent.click(questionsCorrect)
        userEvent.click(questionsFalse)
        userEvent.click(questionsNone)  
    userEvent.click(questionsAll)   
    })
    expect(questionsAll).toBeChecked()
    expect(questionsCorrect).toBeChecked()
    expect(questionsFalse).toBeChecked()
    expect(questionsNone).toBeChecked()

})
})