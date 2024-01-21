export interface IPosition {
  x: number,
  y: number
}
  
export interface RobotState {
  position: IPosition,
  isErrorState: boolean
}

export const initialRobotState: RobotState = {
  position: { x: 0, y: 0 },
  isErrorState: false
};
  