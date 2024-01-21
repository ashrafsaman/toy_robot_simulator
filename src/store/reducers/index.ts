import { RobotState } from "../types/Robot";
import { reducer as robotReducer } from "./robotReducer";

export interface ApplicationState {
  robot: RobotState
}

export const combinedReducers = {
  robot: robotReducer
};
