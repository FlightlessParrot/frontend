import { act, render, screen } from "@testing-library/react"
import ModifyQuestion from "../../../Components/ModifyQuestions/ModifyQuestion"
import userEvent from "@testing-library/user-event"
const data={
            title: 'title',
            underTitle: 'undertitle',
            onChange: jest.fn(),
            value: 1
        }
describe('test ModifyQuestion Component', ()=>{
    it('test if renders correctly',()=>{
        
        render(<ModifyQuestion {...data} ><a>children</a></ModifyQuestion>)
        const title=screen.getByText(data.title);
        const underTitle=screen.getByText(data.underTitle);
        const input=screen.getByRole('searchbox')
        const child=screen.getByText('children')

        expect(title).toBeInTheDocument();
        expect(underTitle).toBeInTheDocument();
        expect(input).toHaveValue(data.value.toString());
        expect(child).toBeInTheDocument();
    })
    it('test if user can type',()=>{
        render(<ModifyQuestion {...data} ><a>children</a></ModifyQuestion>)
        const input=screen.getByRole('searchbox')
        act(()=>{
            userEvent.type(input,'123');
        })

        expect(data.onChange).toBeCalledTimes(3)
    })
})