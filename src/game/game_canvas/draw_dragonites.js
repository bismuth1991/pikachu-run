import { isRRCollided } from '../utils/collision_util';
import { drawAsset } from './draw_asset';
import drawMeteor from './draw_meteor';

import {
  DRAGONITE_METEORS_ACTIVATION_X,
  DRAGONITE_POINTS,
} from '../constant';

const drawDragonite = (dragonite, pikachu, ctx) => {
  drawAsset(dragonite, ctx);

  if (isRRCollided(pikachu, dragonite)) pikachu.addPoints(DRAGONITE_POINTS);

  if (dragonite.physics.x < DRAGONITE_METEORS_ACTIVATION_X && !dragonite.isMeteorsActivate) {
    dragonite.activateDracoMeteor();
  }

  if (dragonite.meteors.length > 0) {
    for (let i = 0; i < dragonite.meteors.length; i += 1) {
      drawMeteor(dragonite.meteors[i], pikachu, ctx);
    }
  }

  if (dragonite.isOutOfBounds()) {
    dragonite.deactivateDracoMeteor();
  }
};

const drawDragonites = (dragonites, pikachu, ctx) => {
  for (let i = 0; i < dragonites.length; i += 1) {
    drawDragonite(dragonites[i], pikachu, ctx);
  }
};

export default drawDragonites;
