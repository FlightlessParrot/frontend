import { render, screen } from "@testing-library/react";
import { questFootLinks } from "../../../Data/navLinks";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import QuestLayout from "../../../Components/Layouts/QuestLayout";
import { act } from "react-test-renderer";
import userEvent from "@testing-library/user-event";

jest.mock("../../../Components/Layouts/TopBar", () => {
  return {
    __esModule: true,
    default: () => <div></div>,
    QuestMobileBar: () => <div />,
  };
});

describe("testing untested component - QuestLayout parts (foot)", () => {
  it("check if foot render correctly", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<QuestLayout />} />
          <Route path="/help" element={<div>Strona pomocy</div>} />
        </Routes>
      </MemoryRouter>
    );
    const links = questFootLinks.map((e) => e.name);

    links.forEach((element) => {
      const node = screen.getByText(element);
      expect(node).toBeInTheDocument();
    });
  });
  it("check if foot navigation works", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<QuestLayout/>} />
          <Route path="/help" element={<div>Strona pomocy</div>} />
        </Routes>
      </MemoryRouter>
    );
    const node = screen.getByText("Pomoc");

    act(() => {
      userEvent.click(node);
    });
    const secondPageNode = screen.queryByText("Strona pomocy");
    expect(secondPageNode).toBeInTheDocument();
    expect(node).not.toBeInTheDocument();
  });
});
