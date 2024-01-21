export const BoardSize = 5;

interface IObject {
  [key: number | string]: any
}  

export const Directions: IObject = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
};

export const KeyCodes: IObject = {
  37: Directions.LEFT,
  38: Directions.UP,
  39: Directions.RIGHT,
  40: Directions.DOWN
};