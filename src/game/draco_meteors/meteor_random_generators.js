import Physics from '../physics';
import { randomFromRange, randomColor } from '../utils/other_utils';
import {
  METEOR_MASS,
  METEOR_MIN_SPAWN_Y,
  METEOR_MAX_SPAWN_X,
  METEOR_MAX_SPAWN_Y,
  METEOR_MIN_SPAWN_X,
  METEOR_MIN_RADIUS,
  METEOR_MAX_RADIUS,
  METEOR_COLORS,
} from '../constant';

export const randomPhysics = () => {
  const physics = new Physics(
    randomFromRange(METEOR_MIN_SPAWN_X, METEOR_MAX_SPAWN_X),
    randomFromRange(METEOR_MIN_SPAWN_Y, METEOR_MAX_SPAWN_Y),
    METEOR_MASS,
  );

  physics.dDown = randomFromRange(5, 10);
  physics.dLeft = randomFromRange(0, 10);
  physics.dRight = randomFromRange(0, 10);

  return physics;
};

export const randomRadius = () => randomFromRange(METEOR_MIN_RADIUS, METEOR_MAX_RADIUS);
export const randomMeteorColor = () => randomColor(METEOR_COLORS);
