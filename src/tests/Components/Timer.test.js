import { render, screen } from "@testing-library/react"
import Timer from "../../Components/Timer"
import { act } from "react-dom/test-utils"
const fn=jest.fn()
describe('test Timer component', ()=>{
    it('test default Timer render correctly', ()=>{
        render(<Timer setTime={fn} setSubmit={fn}/>)

        const title=screen.getByText('Pozostały czas')
        const skeleton=screen.getByText('--',{exact: false})

        expect(title).toBeInTheDocument();
        expect(skeleton).toBeInTheDocument();
    })

    it('test active Timer render correctly', ()=>{
        const time=3600000+ 10*60000
        render(<Timer start time={time} setTime={fn} setSubmit={fn}/>)

        const title=screen.getByText('Pozostały czas')
        const skeleton=screen.queryByText('--',{exact: false})
        const timer=screen.queryByText('01:10:00')
        expect(title).toBeInTheDocument();
        expect(skeleton).not.toBeInTheDocument();
        expect(timer).toBeInTheDocument()
        expect(fn).toBeCalledTimes(1)
    })
    it('test active Timer counts', ()=>{
        const time=3600000+ 10*60000
        jest.useFakeTimers();
        jest.spyOn(global, 'setInterval');   
        render(<Timer start time={time} setTime={fn} setSubmit={fn}/>)

    
        const timer=screen.queryByText('01:10:00')
        act(()=>{
            jest.advanceTimersByTime(35234)
        })

        expect(fn).toBeCalled()
        expect(timer).toBeInTheDocument()
        expect(timer).toHaveTextContent('01:09:25')
        expect(setInterval).toBeCalledTimes(1)
    })
})