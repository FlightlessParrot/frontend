import { act, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PageSwitcher from "../../Components/PageSwitcher";
import userEvent from "@testing-library/user-event"
 const dummyData=[
            {
                url: '/',
                name: 'Main'
            },{
                url: '/Second',
                name: 'Second'
            }
        ];
describe('test Page Switcher Component',()=>{
    it('check if Page Switcher render correctly',()=>{
       


        render(<MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<PageSwitcher links={dummyData} />} />
                    <Route path='/Second' element={<p>Page has been changed!</p>} />
                </Routes>
            </MemoryRouter>);

            const mainLink=screen.getByText('Main')
            const secondLink=screen.getByText('Second')

            expect(mainLink).toBeInTheDocument()
            expect(secondLink).toBeInTheDocument()
        
    })

    it('check if navigation works',()=>{
        render(<MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<PageSwitcher links={dummyData} />} />
                    <Route path='/Second' element={<p>Page has been changed!</p>} />
                </Routes>
            </MemoryRouter>);

            const mainLink=screen.getByText('Main')
            const secondLink=screen.getByText('Second')

            act(
                ()=>{
                    userEvent.click(secondLink)
                }
            )
            const text=screen.getByText('Page has been changed!')

            expect(mainLink).not.toBeInTheDocument()
            expect(secondLink).not.toBeInTheDocument()
            expect(text).toBeInTheDocument()

    })
})