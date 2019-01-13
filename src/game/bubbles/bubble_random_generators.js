import Physics from '../physics';
import { randomFromRange } from '../utils/other_utils';
import {
  CANVAS_WIDTH,
  MIN_RADIUS,
  MAX_RADIUS,
  MAX_ROTATION,
  IGNORE_GRAVITY,
} from '../constant';

export const randomPhysics = () => {
  const physics = new Physics(
    randomFromRange(0, CANVAS_WIDTH),
    0,
    IGNORE_GRAVITY,
  );

  physics.dDown = randomFromRange(1, 5);
  physics.dLeft = randomFromRange(0, 5);
  physics.dRight = randomFromRange(0, 5);

  return physics;
};

export const randomRotation = () => Math.floor(Math.random() * (2 * MAX_ROTATION)) - MAX_ROTATION;

export const randomRadius = () => randomFromRange(MIN_RADIUS, MAX_RADIUS);
