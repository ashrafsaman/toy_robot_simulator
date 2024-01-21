import { ApplicationState } from "../reducers";

export const getRobotPosition = (state: ApplicationState) => state.robot.position;
export const getErrorState = (state: ApplicationState) => state.robot.isErrorState;
