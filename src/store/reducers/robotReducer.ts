import { createSlice } from "@reduxjs/toolkit";
import { Directions } from "../../constants";
import { validateCoordinates } from "../../utils";
import { initialRobotState, RobotState } from "../types/Robot";

const robotSlice = createSlice({
  name: "robot",
  initialState: initialRobotState,
  reducers: {
    moveRobot: (state: RobotState, { payload }) => {
      let isValid = true;
      switch(payload) {
        case Directions.RIGHT:
          isValid = validateCoordinates(state.position.x + 1, state.position.y);
          state.position.x = isValid ? state.position.x + 1 : state.position.x;
          break;

        case Directions.LEFT:
          isValid = validateCoordinates(state.position.x - 1, state.position.y);
          state.position.x = isValid ? state.position.x -= 1 : state.position.x;
          break;
        case Directions.UP:
          isValid = validateCoordinates(state.position.x, state.position.y - 1);
          state.position.y = isValid ? state.position.y -= 1 : state.position.y;
          break;
        case Directions.DOWN:
          isValid = validateCoordinates(state.position.x, state.position.y + 1);
          state.position.y = isValid ? state.position.y += 1 : state.position.y;
      }
      
      state.isErrorState = !isValid;

    },
    setPosition: (state: RobotState, { payload }) => {
      if (validateCoordinates(payload.x, payload.y)) {
        state.position = payload;
      } else state.isErrorState = true;
    }
  },
});

export const { reducer } = robotSlice;
export const { moveRobot, setPosition } = robotSlice.actions;
