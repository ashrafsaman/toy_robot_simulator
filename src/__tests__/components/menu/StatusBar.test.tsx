import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import StatusBar from "../../../components/Menu/StatusBar";
import store from "../../../store/configureStore";
import { initialRobotState } from "../../../store/types/Robot";

//test block
test("displays robot status", () => {
  // render the component on virtual dom
  render(  
  <Provider store={store}>
    <StatusBar />
  </Provider>
  );

  const robotPosition = initialRobotState;

  //select the elements you want to interact with
  const status = screen.getByTestId("status");

  //assert the expected result
  expect(status).toHaveTextContent(`Status: Position(Row: ${robotPosition.position.x}, Column: ${robotPosition.position.y})`);
});