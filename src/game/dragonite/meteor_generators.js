import Physics from '../physics';

import {
  randomFromRange,
  randomColor,
} from '../utils/other_utils';

import {
  METEOR_MASS,
  METEOR_MIN_SPAWN_Y,
  METEOR_MAX_SPAWN_X,
  METEOR_MAX_SPAWN_Y,
  METEOR_MIN_SPAWN_X,
  METEOR_MIN_RADIUS,
  METEOR_MAX_RADIUS,
  METEOR_COLORS,
  MINI_METEOR_MASS,
  MINI_METEOR_MIN_RADIUS,
  MINI_METEOR_MAX_RADIUS,
} from '../constant';

export const meteorPhysics = () => {
  const physics = new Physics(
    randomFromRange(METEOR_MIN_SPAWN_X, METEOR_MAX_SPAWN_X),
    randomFromRange(METEOR_MIN_SPAWN_Y, METEOR_MAX_SPAWN_Y),
    METEOR_MASS,
  );

  physics.dDown = randomFromRange(0, 1);
  physics.dLeft = randomFromRange(0, 20);
  physics.dRight = randomFromRange(0, 20);

  return physics;
};

export const meteorRadius = () => randomFromRange(METEOR_MIN_RADIUS, METEOR_MAX_RADIUS);

export const meteorColor = () => randomColor(METEOR_COLORS);

export const miniMeteorPhysics = (x, y) => {
  const miniMeteorPhys = new Physics(x, y, MINI_METEOR_MASS);

  miniMeteorPhysics.dUp = randomFromRange(5, 50);
  miniMeteorPhysics.dLeft = randomFromRange(5, 50);
  miniMeteorPhysics.dRight = randomFromRange(5, 50);

  return miniMeteorPhys;
};

export const miniMeteorRadius = () => (
  randomFromRange(MINI_METEOR_MIN_RADIUS, MINI_METEOR_MAX_RADIUS)
);
