import { act, render, screen } from "@testing-library/react"

import userEvent from "@testing-library/user-event"
import OnlyOneAnswer from "../../../Components/TestInterface/OnlyOneAnswer"

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
describe('test Only One Answer component',()=>{

    it('test component render correctly', ()=>{
        render(<OnlyOneAnswer answers={answers(4)} isValid={fn} answersController={cont} />)

        const randomAnswer=screen.getByLabelText('answer has id: 1')
        const allAnswers=screen.getAllByLabelText('answer has id:', {exact: false})

        expect(randomAnswer).toBeInTheDocument()
        expect(allAnswers).toHaveLength(4)
        allAnswers.forEach(
          a=>  expect(a).not.toBeChecked()
        )
    })
    it('test user can check radio', ()=>{
        render(<OnlyOneAnswer answers={answers(4)} isValid={fn} answersController={cont}/>)

        const randomAnswer=screen.getByLabelText('answer has id: 1')
        
        const anotherAnswer=screen.getByLabelText('answer has id: 2')
        act(
            ()=>{
                userEvent.click(randomAnswer)
            }
        )
        expect(fn).toBeCalledTimes(2)
        expect(cont).toBeCalledTimes(2)
        expect(fn).toBeCalledWith(true)
        expect(randomAnswer).toBeChecked()
        expect(anotherAnswer).not.toBeChecked()
    })
    it('test user can check only one radio', ()=>{
        render(<OnlyOneAnswer answers={answers(4)} isValid={fn} answersController={cont}/>)
        const randomAnswer=screen.getByLabelText('answer has id: 1')
        
        const anotherAnswer=screen.getByLabelText('answer has id: 2')

        act(
            ()=>{
                userEvent.click(anotherAnswer)
                userEvent.click(randomAnswer)
            }
        )        
        expect(fn).toBeCalledTimes(3)
        expect(cont).toBeCalledTimes(3)
        expect(fn).toBeCalledWith(true)
        expect(randomAnswer).toBeChecked()
        expect(anotherAnswer).not.toBeChecked()
    })

})