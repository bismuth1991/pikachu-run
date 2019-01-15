import Physics from '../physics';
import { randomFromRange } from '../utils/other_utils';
import {
  PRIMEAPE_MIN_SPAWN_X,
  PRIMEAPE_MAX_SPAWN_X,
  BASE_Y,
  IGNORE_GRAVITY,
  PRIMEAPE_SPEED,
  PRIMEAPE_HEIGHT,
} from '../constant';

const primeapePhysics = () => {
  const physics = new Physics(
    randomFromRange(PRIMEAPE_MIN_SPAWN_X, PRIMEAPE_MAX_SPAWN_X),
    // randomFromRange(800, 800),
    BASE_Y - PRIMEAPE_HEIGHT,
    IGNORE_GRAVITY,
  );

  physics.dLeft = PRIMEAPE_SPEED;

  return physics;
};

export default primeapePhysics;
