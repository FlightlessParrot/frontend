import { render, screen, act } from "@testing-library/react"
import OpenQuestion from "../../../Components/TestInterface/OpenQuestion"
import userEvent from "@testing-library/user-event"

const validationFunction=jest.fn()
describe('test Open Question component', ()=>{
    it('test component render correctly', ()=>{
        render(<OpenQuestion    isValid={validationFunction} />)

        const error=screen.getByText(/Nie udzieliłeś/);
        const question=screen.getByLabelText(/Udziel odpowiedzi/);

        expect(error).toBeInTheDocument();
        expect(question).toBeInTheDocument();
    })
    it('test validation works',()=>{
        render(<OpenQuestion    isValid={validationFunction} />)

        const error=screen.getByText(/Nie udzieliłeś/);
        const question=screen.getByLabelText(/Udziel odpowiedzi/);

        act(
           ()=> userEvent.type(question,'123')
        )

        expect(error).not.toBeInTheDocument();
        expect(validationFunction).toBeCalledWith(true);
    })
})