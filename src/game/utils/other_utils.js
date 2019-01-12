import Physics from '../physics';
import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  MIN_RADIUS,
  MAX_RADIUS,
  MAX_ROTATION,
} from '../constant';

export const randomFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const randomColor = colors => colors[Math.floor(Math.random() * colors.length)];

export const randomPhysics = () => (
  new Physics(randomFromRange(0, CANVAS_HEIGHT), randomFromRange(0, CANVAS_WIDTH), 0)
);
export const randomRotation = () => Math.floor(Math.random() * (2 * MAX_ROTATION)) - MAX_ROTATION;
export const randomRadius = () => randomFromRange(MIN_RADIUS, MAX_RADIUS);
