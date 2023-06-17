import {  findByTestId, fireEvent, getByRole, getByTestId, queryByRole, render, screen } from "@testing-library/react";
import QuestTopBar, { QuestMobileBar, MobileBar }  from "../../../Components/Layouts/TopBar";
import { questLinks, testLinks, userMainLinks } from "../../../Data/navLinks";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";


jest.useFakeTimers()
const texts=questLinks.map((e)=>e.name)
describe('Top Bar Components tests', ()=>{
    it('Check if Top Bar render correctly',()=>{
        render(
            <MemoryRouter initialEntries={['/']} >
                <Routes>
                    <Route path='/' element={<QuestTopBar links={questLinks} />}  />
                    <Route path='/help' element={<div>Strona pomocy</div>}  />
                </Routes>
            </MemoryRouter>
        )

        
        texts.forEach(element => {
            const node=screen.getByText(element);
            expect(node).toBeInTheDocument()
        });

    })

    it('Check if Top Bar navigation works',()=>{
        render(<MemoryRouter initialEntries={['/']} >
        <Routes>
            <Route path='/' element={<QuestTopBar links={questLinks} />}  />
            <Route path='/help' element={<div>Strona pomocy</div>}  />
        </Routes>
    </MemoryRouter>)
  
        const node=screen.getByText('Pomoc')
        act(()=>{
            userEvent.click(node)
        }
        
        )
        const element=screen.queryByText('Strona pomocy')

        expect(node).not.toBeInTheDocument()
        expect(element).toBeInTheDocument()
    })

    it('Check if Quest Mobile Navigation is hidden', ()=>{
    render(<MemoryRouter initialEntries={['/']} >
        <Routes>
            <Route path='/' element={<QuestMobileBar links={questLinks} />}  />
            <Route path='/help' element={<div>Strona pomocy</div>}  />
        </Routes>
    </MemoryRouter>)

        const node=screen.queryByTestId('MobileNavigation-window')

        expect(node.style.visibility).toBe('hidden')
    });
    it('Check if Quest Mobile Navigation appear', async ()=>{
        render(<MemoryRouter initialEntries={['/']} >
        <Routes>
            <Route path='/' element={<QuestMobileBar />}  />
            <Route path='/help' element={<div>Strona pomocy</div>}  />
        </Routes>
    </MemoryRouter>)
    const button=screen.getByTestId('MobileNavigation-button')
    

    act(()=>{
        
      userEvent.click(button)
       jest.advanceTimersByTime(10000)
    })
    
       const  node= screen.queryByTestId('MobileNavigation-window')

    expect(button).toBeVisible()
    
     expect(node.style.visibility).toBe('visible')
     
    });
    it('CHeck if Quest Mobile navigation works',async ()=>{
        render(<MemoryRouter initialEntries={['/']} >
        <Routes>
            <Route path='/' element={<QuestMobileBar />}  />
            <Route path='/help' element={<div>Strona pomocy</div>}  />
        </Routes>
    </MemoryRouter>)
   const button=screen.getByTestId('MobileNavigation-button')
        
        act(()=>{
            userEvent.click(button)
            jest.advanceTimersByTime(3000) })
           
       
        const nodes=screen.getAllByRole('menuitem')
        const node=nodes.filter((e)=>e.getAttribute('href')==='/help')[0]

        act(()=>{
             userEvent.hover(node)
            userEvent.click(node)
        }
        )
        
        const element=screen.queryByText('Strona pomocy')

        expect(node).not.toBeInTheDocument()
        expect(element).toBeInTheDocument()
    })
    it('check if user mobile navigation render correctly',()=>{
        render(<MemoryRouter initialEntries={['/user/test/create-test']} >
        <Routes>
            <Route path='/user/test/create-test' element={<div><MobileBar mainNav={userMainLinks.MainNav} help={userMainLinks.Help} underNav={testLinks} /></div>}  />
            <Route path='/user/help' element={<div>Strona pomocy</div>}  />
        </Routes>
    </MemoryRouter>)
    
    const button=screen.getByTestId('MobileNavigation-button')
    const menu=screen.queryByTestId('MobileNavigation-window')

    expect(button).toBeInTheDocument()
    expect(menu.style.visibility).toBe('hidden')


    })

    it('check if user mobile navigation appear',()=>{
        render(<MemoryRouter initialEntries={['/user/test/create-test']} >
        <Routes>
            <Route path='/user/test/create-test' element={<div className="w-[1000px] h-[1000px]"><MobileBar mainNav={userMainLinks.MainNav} help={userMainLinks.Help} underNav={testLinks} /></div>}  />
            <Route path='/user/help' element={<div>Strona pomocy</div>}  />
        </Routes>
    </MemoryRouter>)
    
    const button=screen.getByTestId('MobileNavigation-button')
   
        act(()=>{
            userEvent.click(button)
            jest.advanceTimersByTime(10000)
           
        })

    const menu=screen.queryByTestId('MobileNavigation-window')
    expect(menu.style.visibility).toBe('visible')
    })
  


    
})