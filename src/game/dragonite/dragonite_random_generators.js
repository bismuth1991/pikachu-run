import Physics from '../physics';
import { randomFromRange } from '../utils/other_utils';
import {
  IGNORE_GRAVITY,
  DRAGONITE_MIN_SPAWN_X,
  DRAGONITE_MAX_SPAWN_X,
  DRAGONITE_MIN_SPAWN_Y,
  DRAGONITE_MAX_SPAWN_Y,
  DRAGONITE_MIN_SPEED,
  DRAGONITE_MAX_SPEED,
} from '../constant';

const dragonitePhysics = () => {
  const physics = new Physics(
    randomFromRange(DRAGONITE_MIN_SPAWN_X, DRAGONITE_MAX_SPAWN_X),
    randomFromRange(DRAGONITE_MIN_SPAWN_Y, DRAGONITE_MAX_SPAWN_Y),
    IGNORE_GRAVITY,
  );

  physics.dLeft = randomFromRange(DRAGONITE_MIN_SPEED, DRAGONITE_MAX_SPEED);

  return physics;
};

export default dragonitePhysics;
