import { render, screen, waitFor } from "@testing-library/react";
import AddOrDeleteQuestion from "../../../Components/ModifyQuestions/AddOrDeleteQuestion";
import { fn } from "../../../fetch/universalFetchSchema";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

jest.mock("../../../fetch/universalFetchSchema", () => {
  const fn = jest.fn();
  return {
    __esModule: true,
    default: async () => {
      fn();
      return [
        { id: 0, question: "testI" },
        { id: 1, question: "testII" },
      ];
    },
    fn: fn,
  };
});

describe("test AddOrDeleteQuestion component- add variant", () => {
  it("test if component render correctly ", async () => {
    render(<AddOrDeleteQuestion add={true} testId={1} />);

    const title = screen.queryByText("Dodaj pytanie");
    const secTitle = screen.queryByText("Usuń pytanie");
    const input = screen.getByLabelText("Wyszukaj pytanie");
    const button = screen.getByLabelText("Kliknij, aby wyszukać");

    await waitFor(()=>{
    expect(fn).toBeCalled();
    expect(title).toBeInTheDocument();

    expect(secTitle).not.toBeInTheDocument();
    expect(input).toBeInTheDocument();

    expect(button).toBeInTheDocument();
    })
  });

  it("test if component render questions 1234", async () => {
   render(<AddOrDeleteQuestion add={true} testId={1} />)
    const input = screen.getByLabelText("Wyszukaj pytanie");
     
    act(() => {
      userEvent.type(input, "123");
    });
    const addButtons =await screen.findAllByText("Dodaj");
    await waitFor(()=>{
    expect(fn).toBeCalledTimes(4);
   expect(addButtons[0]).toBeInTheDocument()
    })
  });
  it("test question button works", async () => {
    render(<AddOrDeleteQuestion add={true} testId={1} />);
    const addButtons =await screen.findAllByText("Dodaj");
    act(() => userEvent.click(addButtons[0]));
    await waitFor(()=>{
    expect(fn).toBeCalledTimes(3);
    })
  });
});
describe("test AddOrDeleteQuestion component- delete variant", () => {
  it("test if component render correctly",async () =>  {
    render(<AddOrDeleteQuestion add={false} testId={1} />);

    const title = screen.queryByText("Dodaj pytanie");
    const secTitle = screen.queryByText("Usuń pytanie");

    const delButtons = await screen.findAllByText("Usuń");
    const input = screen.getByLabelText("Wyszukaj pytanie");
    const button = screen.getByLabelText("Kliknij, aby wyszukać");
    await waitFor(()=>{
    expect(title).not.toBeInTheDocument();
    expect(delButtons[0]).toBeInTheDocument();
    expect(secTitle).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(fn).toBeCalled();
    expect(button).toBeInTheDocument();
    })
  });
  it("test component call function",async () => {
    render(<AddOrDeleteQuestion add={false} testId={1} />);

    const input = screen.getByLabelText("Wyszukaj pytanie");
    act(() => {
      userEvent.type(input, "123");
    });
    await waitFor(()=>{
    expect(fn).toBeCalledTimes(4);
    })
  });
  it("test question button works", async () => {
    render(<AddOrDeleteQuestion add={false} testId={1} />);
    const delButtons = await screen.findAllByText("Usuń");
    act(() => userEvent.click(delButtons[0]));
    await waitFor(()=>{
    expect(fn).toBeCalledTimes(3);
    })
  });
});
