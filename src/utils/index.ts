import * as CSS from 'csstype';
import { IPosition } from '../store/types/Robot';

export interface RobotTransition {
  prevTransition: CSS.Properties;
  currentTransition: CSS.Properties;
}

export type CreateRobotTransition = (previousPosition: IPosition, currentPosition: IPosition) => RobotTransition;

export const createRobotTransition: CreateRobotTransition = (previousPosition, currentPosition) => {
    return {
      prevTransition: {
        transform: `translate(${previousPosition.x * 100}%, ${previousPosition.y * 100}%)`
      },
      currentTransition: {
        transform: `translate(${currentPosition.x * 100}%, ${currentPosition.y * 100}%)`
      }
    };
  };

  export const validateCoordinates = (x: number, y: number) => {
    return (x > -1 && x < 5) && (y > -1 && y < 5);
  };