import renderer from 'react-test-renderer'
import CheckAnswer from '../../../Components/Answers/CheckAnswer'

describe('test Check Answer Component', ()=>{
    const data={
        question: 'Who is the parrot?',
        answer: 'I hope I am not'
    }
it('test null component render correctly', ()=>{
    const app=renderer.create(<CheckAnswer {...data} ><p>{data.answer}</p></CheckAnswer>).toJSON()
    expect(app).toMatchSnapshot()
})
it('test happy component render correctly', ()=>{
    const app=renderer.create(<CheckAnswer {...data} correct ><p>{data.answer}</p></CheckAnswer>).toJSON()
    expect(app).toMatchSnapshot()
})
it('test sad component render correctly', ()=>{
    const app=renderer.create(<CheckAnswer {...data} correct={false}> <p>{data.answer}</p></CheckAnswer>).toJSON()
    expect(app).toMatchSnapshot()
})

})