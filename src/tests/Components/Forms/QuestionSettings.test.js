import { screen, render } from "@testing-library/react"
import QuestionSettings from "../../../Components/Forms/QuestionSettings"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"

describe('test Question Settings Component',()=>{
    it('test if render correctly',()=>{
        render(<QuestionSettings />)
        const questionsAll=screen.getByLabelText('Wszystkie', {exact: false})
        const questionsCorrect=screen.getByLabelText('jednokrotnego', {exact: false})
        const questionsFalse=screen.getByLabelText('wielokrotnego', {exact: false})
        const questionsNone=screen.getByLabelText('pary',{exact:false})

        expect(questionsAll).toBeChecked()
        expect(questionsCorrect).toBeChecked()
        expect(questionsFalse).toBeChecked()
        expect(questionsNone).toBeChecked()
    })

    it('testif all-toggle button toggle all off',()=>{
        render(<QuestionSettings />)
        const questionsAll=screen.getByLabelText('Wszystkie', {exact: false})
        const questionsCorrect=screen.getByLabelText('jednokrotnego', {exact: false})
        const questionsFalse=screen.getByLabelText('wielokrotnego', {exact: false})
        const questionsNone=screen.getByLabelText('pary',{exact:false})
       act(()=>{
        userEvent.click(questionsAll) 
       })
        
      
        expect(questionsCorrect).not.toBeChecked()
        expect(questionsFalse).not.toBeChecked()
        expect(questionsNone).not.toBeChecked()
    })

    it('test if all-toggle button toggle all on',()=>{
        render(<QuestionSettings/>)
        const questionsAll=screen.getByLabelText('Wszystkie', {exact: false})
        const questionsCorrect=screen.getByLabelText('jednokrotnego', {exact: false})
        const questionsFalse=screen.getByLabelText('wielokrotnego', {exact: false})
        const questionsNone=screen.getByLabelText('pary',{exact:false})
    
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