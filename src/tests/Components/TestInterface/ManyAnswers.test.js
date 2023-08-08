import { act, render, screen } from "@testing-library/react"

import userEvent from "@testing-library/user-event"

import ManyAnswers from "../../../Components/TestInterface/ManyAnswers";

const answers = (number) => {
  const el = [];
  for (let i = 1; i <= number; i++) {
    el.push({
      id: i,
      answer: "answer has id: " + i,
    });
  }
  return el;
};
const fn= jest.fn()
const cont=jest.fn()
describe('test Many Answers component',()=>{

    it('test component render correctly', ()=>{
        render(<ManyAnswers answers={answers(4)} isValid={fn} answersController={cont}/>)

        const randomAnswer=screen.getByLabelText('answer has id: 1')
        const allAnswers=screen.getAllByLabelText('answer has id:', {exact: false})

        expect(randomAnswer).toBeInTheDocument()
        expect(allAnswers).toHaveLength(4)
        allAnswers.forEach(
          a=>  expect(a).not.toBeChecked()
        )
    })
    it('test user can check and unchecked checkbox', ()=>{
        render(<ManyAnswers answers={answers(4)} isValid={fn} answersController={cont}/>)

        const randomAnswer=screen.getByLabelText('answer has id: 1')
        
        const anotherAnswer=screen.getByLabelText('answer has id: 2')
        act(
            ()=>{
                userEvent.dblClick(anotherAnswer)
                userEvent.click(randomAnswer)
                
            }
        )
        expect(fn).toBeCalledTimes(4)
        expect(fn).toBeCalledWith(true)
        expect(randomAnswer).toBeChecked()
        expect(anotherAnswer).not.toBeChecked()
    })
    it('test user can check many checkbox', ()=>{
        render(<ManyAnswers answers={answers(4)} isValid={fn} answersController={cont}/>)
        const randomAnswer=screen.getByLabelText('answer has id: 1')
        
        const anotherAnswer=screen.getByLabelText('answer has id: 2')

        act(
            ()=>{
                userEvent.click(anotherAnswer)
                userEvent.click(randomAnswer)
            }
        )        
        expect(fn).toBeCalledTimes(3)
        expect(fn).toBeCalledWith(true)
        expect(randomAnswer).toBeChecked()
        expect(anotherAnswer).toBeChecked()
    })

})