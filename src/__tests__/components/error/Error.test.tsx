import { render, screen } from "@testing-library/react";
import ErrorMessage from "../../../components/Error";

//test block
test("displays error", () => {
  // render the component on virtual dom
  render(<ErrorMessage />);

  //select the elements you want to interact with
  const errorMessage = screen.getByTestId("error");

  //assert the expected result
  expect(errorMessage).toHaveTextContent("Invalid move");
});