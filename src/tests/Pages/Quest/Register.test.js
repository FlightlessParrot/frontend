import { fireEvent, queryAllByRole, render, screen } from "@testing-library/react";
import { Register } from "../../../Pages/Quest/Register";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

window.scroll=jest.fn()
jest.mock("../../../Components/Layouts/QuestLoginLayout", () => {
  const module = jest.requireActual(
    "../../../Components/Layouts/QuestLoginLayout"
  );
  return {
    __esModule: true,
    ...module,
   
    QuestLoginLayout: (props) => <div>{props.children}</div>,
  };
});

jest.mock("react-router-dom", () => {
  return {
    __esModule: true,
    ...module, 
    useActionData: ()=>false,
    Form: (props) => <form onSubmit={(e)=>e.preventDefault() }>{props.children}</form>,
  };
});
describe("Check untested register data", () => {
  it("check if there are forms", () => {
    render(<Register />);

    const nip = screen.getByLabelText("NIP*");
    const postCode = screen.getByLabelText("Kod pocztowy");
    const check = screen.getByLabelText("wyrażam", { exact: false });

    expect(nip).toBeInTheDocument();
    expect(postCode).toBeInTheDocument();
    expect(check).toBeInTheDocument();
  });
  it("check if forms works", () => {
    render(<Register />);

    const nip = screen.getByLabelText("NIP*");
    const postCode = screen.getByLabelText("Kod pocztowy");
    const check = screen.getByLabelText("wyrażam", { exact: false });

    act(() => {
      userEvent.type(nip, "123aa-");
      userEvent.type(postCode, "122aa-12");
      userEvent.click(check);
    });

    expect(nip).toHaveValue("123-");
    expect(postCode).toHaveValue("122-12");
    expect(check).toBeTruthy();
  });
  it("check if validation works", () => {
    render(<Register></Register>);

    const postCode = screen.getByLabelText("Kod pocztowy");
    const check = screen.getByLabelText("wyrażam", { exact: false });
    const button = screen.getByRole("button");
    act(() => {
      fireEvent.blur(postCode);
      userEvent.dblClick(button);
    });

    const errors = screen.getAllByRole("error");
    expect(button).toHaveTextContent("Zakładam konto");
    expect(check).not.toBeChecked();
    expect(errors).toHaveLength(2);
  });
  it('check if validation dissappear', ()=>{
    render(<Register />)
    const postCode = screen.getByLabelText("Kod pocztowy");
    const check = screen.getByLabelText("wyrażam", { exact: false });
    const button = screen.getByRole("button");
    act(() => {
      fireEvent.blur(postCode);
      userEvent.dblClick(button);
      userEvent.click(check)
      userEvent.type(postCode, '98-111')
    });

    const error=screen.queryAllByRole('error')
    expect(postCode).toHaveValue('98-111')
    expect(check).toBeChecked();
    expect(error).toHaveLength(0);

  })
});
