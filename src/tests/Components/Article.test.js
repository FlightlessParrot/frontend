import { render, screen } from "@testing-library/react"
import Article from "../../Components/Article"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"
describe('Article tests',()=>{
    it('check text before button click',()=>{
        render(<Article  text={{summary: 'summary', text: 'text'}}/>)
        const text=screen.queryByText('text');
     
         const textAfterClick=screen.getByText('summary')
        expect(textAfterClick).toBeInTheDocument();
        expect(text).not.toBeInTheDocument();
       
    });
    it('check text after button click',()=>{
       render(<Article  text={{summary: 'summary', text: 'text'}}/>)
        const button=screen.getByRole('button')
       act(()=> {userEvent.click(button)});
        const text=screen.queryByText('summary');
        const textAfterClick=screen.getByText('text')
        expect(textAfterClick).toBeInTheDocument();
        expect(text).not.toBeInTheDocument();
    });
    it('check if text hide',()=>{
        const text={summary: 'summary', text: 'text'}
        render(<Article  text={text}/>)
        const button=screen.getByRole('button')

        act(()=>{
            userEvent.dblClick(button)
        })
        const nodeText=screen.getByText(text.summary)
        const nodeNotPresentText=screen.queryByText(text.text)
        expect(nodeText).toBeInTheDocument()
        expect(nodeNotPresentText).not.toBeInTheDocument()
    });
})