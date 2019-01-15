import Physics from '../physics';
import { randomFromRange } from '../utils/other_utils';
import {
  MIN_RADIUS,
  MAX_RADIUS,
  MAX_ROTATION,
  IGNORE_GRAVITY,
  BUBBLE_MIN_SPAWN_X,
  BUBBLE_MAX_SPAWN_X,
  BUBBLE_SPAWN_Y,
} from '../constant';

export const bubblePhysics = () => {
  const physics = new Physics(
    randomFromRange(BUBBLE_MIN_SPAWN_X, BUBBLE_MAX_SPAWN_X),
    BUBBLE_SPAWN_Y,
    IGNORE_GRAVITY,
  );

  physics.dDown = randomFromRange(1, 5);
  physics.dLeft = randomFromRange(0, 5);
  physics.dRight = randomFromRange(0, 5);

  return physics;
};

export const bubbleRotation = () => Math.floor(Math.random() * (2 * MAX_ROTATION)) - MAX_ROTATION;

export const bubbleRadius = () => randomFromRange(MIN_RADIUS, MAX_RADIUS);
