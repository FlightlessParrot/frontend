
import renderer from 'react-test-renderer'
import CreateOpenQuestion from '../../../Pages/Teacher/CreateOpenQuestion'
import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
global.URL.createObjectURL=jest.fn()
jest.mock('react-router-dom', ()=>{
    const router=jest.requireActual('react-router-dom');
    return {
        __esModule: true,
        ...router,
        useActionData: ()=>({}),
        Form: ({children})=><form>{children}</form>,
        Link: ({children})=><a>{children}</a>
    }
})
describe('test Create Open Questions Component',()=>{
    it('test component render correctly',()=>{
        const element=renderer.create(<CreateOpenQuestion />).toJSON()
        expect(element).toMatchSnapshot();
    })

    it('test user can write question name',()=>{
        render(<CreateOpenQuestion />)

        const question =screen.getByPlaceholderText(/pantofelek/)

        act(
            ()=>{
                userEvent.type(question,'text')
            }
        )

        expect(question).toHaveValue('text');
    })

    it('test errors appears',()=>{
        render(<CreateOpenQuestion />)
        const textFile = new File(['file'], 'file.txt', {type: 'txt'})
        const question =screen.getByPlaceholderText(/pantofelek/)
        const file=screen.getByTestId('fileInput')

        act(
            ()=>{
                fireEvent.change(question)
                userEvent.upload(file, textFile)
            }
        )
        const questionError=screen.getByText(/Pytanie nie może/)
        const fileError=screen.getByText('Format zdjęcia jest niewłaściwy.')

        expect(questionError).toBeInTheDocument()
        expect(fileError).toBeInTheDocument()

    })

    it('test errors dissapear when user gives correct data', ()=>
    {
        render(<CreateOpenQuestion />)
        const textFile =new File(['file'], 'file.txt', {type: 'txt'})
        const jpgFile= new File(['file'], 'file.jpg', {type: 'image/jpg'})
        const question =screen.getByPlaceholderText(/pantofelek/)
        const file=screen.getByTestId('fileInput')

        act(
            ()=>{
                fireEvent.change(question)
                userEvent.upload(file, textFile)
                
            }
        )
        const questionError=screen.queryByText(/Pytanie nie może być puste./)
        const fileError=screen.queryByText('Format zdjęcia jest niewłaściwy.')
        act(
            ()=>{
                userEvent.upload(file, jpgFile)
                userEvent.type(question,'question')
            }
        )
        expect(questionError).not.toBeInTheDocument()
        expect(fileError).not.toBeInTheDocument()
    })
})