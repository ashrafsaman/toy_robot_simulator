import { render, screen, waitFor, within } from "@testing-library/react";
import { Provider } from "react-redux";
import Actions from "../../../components/Menu/Actions";
import store from "../../../store/configureStore";

//test block
test("displays menu actions", async() => {
  // render the component on virtual dom
  render(  
  <Provider store={store}>
    <Actions />
  </Provider>
  );

  //select the elements you want to interact with
  const buttonGroup = screen.getByTestId("button-group");
  const buttons = await waitFor(() => screen.findAllByTestId("button"));  //assert the expected result
  expect(buttons.length).toBe(4)
});