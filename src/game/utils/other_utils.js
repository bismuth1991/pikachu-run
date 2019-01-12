import Physics from '../physics';
import {
  CANVAS_WIDTH,
  MIN_RADIUS,
  MAX_RADIUS,
  MAX_ROTATION,
  OTHER_MASS,
} from '../constant';

export const randomFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const randomColor = colors => colors[Math.floor(Math.random() * colors.length)];

export const randomPhysics = () => {
  const physics = new Physics(
    randomFromRange(0, CANVAS_WIDTH),
    0,
    OTHER_MASS,
  );

  physics.dDown = randomFromRange(1, 5);
  physics.dLeft = randomFromRange(0, 5);
  physics.dRight = randomFromRange(0, 5);

  return physics;
};

export const randomRotation = () => Math.floor(Math.random() * (2 * MAX_ROTATION)) - MAX_ROTATION;

export const randomRadius = () => randomFromRange(MIN_RADIUS, MAX_RADIUS);
