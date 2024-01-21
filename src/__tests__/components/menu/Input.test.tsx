import { render, screen, waitFor, within } from "@testing-library/react";
import { Provider } from "react-redux";
import Input from "../../../components/Menu/Input";
import store from "../../../store/configureStore";

//test block
test("displays input fields", async() => {
  // render the component on virtual dom
  render(  
  <Provider store={store}>
    <Input />
  </Provider>
  );

  //select the elements you want to interact with
  const xInput = screen.getByTestId("x-coordinate");
  expect(xInput).toBeInTheDocument();
  const yInput = screen.getByTestId("y-coordinate");
  expect(yInput).toBeInTheDocument();
});