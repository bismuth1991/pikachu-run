import { drawAsset } from './draw_asset';
import { isRRCollided } from '../utils/collision_util';
import { SPEAROW_POINTS } from '../constant';

const drawSpearow = (spearow, pikachu, ctx) => {
  if (isRRCollided(pikachu, spearow) && !pikachu.isInvincible) {
    pikachu.takeDamage();
    pikachu.addPoints(SPEAROW_POINTS);
  }

  drawAsset(spearow, ctx);
};

const drawSpearows = (spearows, pikachu, ctx) => {
  for (let i = 0; i < spearows.length; i += 1) {
    drawSpearow(spearows[i], pikachu, ctx);
  }
};

export default drawSpearows;
