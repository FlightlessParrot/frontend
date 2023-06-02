import { act, fireEvent, render, screen } from "@testing-library/react";
import { UserData } from "../../../Components/Forms/UserData";
import userEvent from "@testing-library/user-event";

describe("User Data Tests", () => {
  it("UserData renders correctly", () => {
    const data = {
      title: "Tytuł",
      name: "imie",
    };
    const MockingFuntion = jest.fn();

    render(
      <form onSubmit={MockingFuntion}>
        <UserData {...data} />
      </form>
    );
    const input = screen.getByTestId("UserData-input");
    const label = screen.getByText(data.title);
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });
  it("check if validation id on the screen", () => {
    const data = {
      title: "Tytuł",
      name: "imie",
    };
    const MockingFuntion = jest.fn();
    render(
      <form onSubmit={MockingFuntion}>
        <UserData {...data} />
      </form>
    );
    const input = screen.getByTestId("UserData-input");
    act(() => {
      fireEvent.blur(input);
    });

    const error = screen.getByText("Zapomniałeś mnie uzupełnić!");
    expect(error).toBeInTheDocument();
  });
  it("check if validation is not on the screen", () => {
    const data = {
      title: "Tytuł",
      name: "imie",
    };
    const MockingFuntion = jest.fn();
    render(
      <form onSubmit={MockingFuntion}>
        <UserData {...data} />
      </form>
    );
    const input = screen.getByTestId("UserData-input");
    act(() => {
      fireEvent.blur(input);
      userEvent.type(input, "123");
    });

    const error = screen.queryByText("Zapomniałeś mnie uzupełnić!");
    expect(error).not.toBeInTheDocument();
  });

  it("check if the data is sent", () => {
    const data = {
      title: "Tytuł",
      name: "imie",
    };
    const MockingFuntion = jest.fn((e) => {
      e.preventDefault();
      const formData =new FormData(e.target)
      return formData.has("imie");
    });
    render(
      <form onSubmit={MockingFuntion}>
        <UserData {...data} />
        <button>S</button>
      </form>
    );
    const input = screen.getByTestId("UserData-input");
    const button = screen.getByRole("button");
    act(() => {
      userEvent.type(input, "123");
      userEvent.click(button);
    });
    expect(MockingFuntion).toBeCalled();
    expect(MockingFuntion).toHaveReturnedWith(true);
  });
});
