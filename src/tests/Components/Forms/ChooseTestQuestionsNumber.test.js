import { render, screen } from "@testing-library/react"
import ChooseTestQuestionsNumber from "../../../Components/Forms/chooseTestQuestionsNumber"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"


describe('test Choose Test Questions Number Component', ()=>{
    it('test if render correctly',()=>{
        render(<ChooseTestQuestionsNumber />)
        const option=screen.getByText(120);
        expect(option).toBeInTheDocument();
    })
    it('test if user can choose number',()=>{
        render(<ChooseTestQuestionsNumber />)
        const option=screen.getByText(120);
        const select=screen.getByLabelText('Ilość', {exact: false})
        act(()=>userEvent.selectOptions(select, '120'))
         
        expect(option).toBeInTheDocument();
        expect(select).toHaveValue('120');
    })
})