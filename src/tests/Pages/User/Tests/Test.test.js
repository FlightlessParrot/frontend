import { render, screen, act } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import Tests from "../../../../Pages/User/Tests/Tests"

describe('test tests page', ()=>{
    it('check if tests page render correctly',()=>{
        render(
            <MemoryRouter initialEntries={["/user/tests"]}>
            <Routes>
              <Route path="/user/tests" element={<Tests />}/>
              <Route path="/help" element={<div>Strona pomocy</div>} />
            </Routes>
          </MemoryRouter>
        )

        const header=screen.getByTestId('Title-h1')
        const underHeader=screen.getByText('Generuj testy i zarządzaj nimi.')

        expect(header).toBeInTheDocument()
        expect(underHeader).toBeInTheDocument()

    })
    it('check if tests page text does not exists in nested routes',()=>{
        render(
            <MemoryRouter initialEntries={["/user/tests/1"]}>
            <Routes>
              <Route path="/user/tests/1" element={<Tests />}/>
              <Route path="/help" element={<div>Strona pomocy</div>} />
            </Routes>
          </MemoryRouter>
        )

        const header=screen.queryByTestId('Title-h1')
        const underHeader=screen.queryByText('Generuj testy i zarządzaj nimi.')

        expect(header).not.toBeInTheDocument()
        expect(underHeader).not.toBeInTheDocument()

    })

})