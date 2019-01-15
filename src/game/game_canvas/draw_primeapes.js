import { drawAsset } from './draw_asset';
import { isRRCollided } from '../utils/collision_util';

import {
  PRIMEAPE_POINTS,
  PRIMEAPE_FRAMES_TILL_NEXT_ACTION,
} from '../constant';

const drawPrimeape = (primeape, pikachu, ctx) => {
  drawAsset(primeape, ctx);

  if (isRRCollided(pikachu, primeape) && !pikachu.isInvincible) {
    pikachu.takeDamage();
    pikachu.addPoints(PRIMEAPE_POINTS);
  }

  primeape.updateFramesPassed();

  if (primeape.framesPassed > PRIMEAPE_FRAMES_TILL_NEXT_ACTION) {
    primeape.randomAction();
    primeape.resetFramesPassed();
  }
};

const drawPrimeapes = (primeapes, pikachu, ctx) => {
  for (let i = 0; i < primeapes.length; i += 1) {
    drawPrimeape(primeapes[i], pikachu, ctx);
  }
};

export default drawPrimeapes;
