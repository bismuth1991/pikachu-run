import Physics from '../physics';

import {
  SPEAROW_MIN_SPAWN_Y,
  SPEAROW_MAX_SPAWN_Y,
  IGNORE_GRAVITY,
  SPEAROW_SPEED,
  SPEAROW_MIN_SPAWN_X,
  SPEAROW_MAX_SPAWN_X,
} from '../constant';

import { randomFromRange } from '../utils/other_utils';

const spearowPhysics = () => {
  const physics = new Physics(
    randomFromRange(SPEAROW_MIN_SPAWN_X, SPEAROW_MAX_SPAWN_X),
    randomFromRange(SPEAROW_MIN_SPAWN_Y, SPEAROW_MAX_SPAWN_Y),
    IGNORE_GRAVITY,
  );
  physics.dLeft = SPEAROW_SPEED;

  return physics;
};

export default spearowPhysics;
