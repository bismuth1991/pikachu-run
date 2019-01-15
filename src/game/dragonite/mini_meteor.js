import {
  miniMeteorPhysics,
  miniMeteorRadius,
} from './meteor_generators';

import {
  BASE_Y,
  MINI_METEOR_FRICTION,
} from '../constant';

class MiniMeteor {
  constructor(x, y, color) {
    this.physics = miniMeteorPhysics(x, y);
    this.radius = miniMeteorRadius();
    this.color = color;
    this.timeToLive = 50;
  }

  isHitGround() {
    return this.physics.y + this.radius <= BASE_Y;
  }

  bounce() {
    this.physics.dUp = this.physics.dDown * MINI_METEOR_FRICTION;
    this.physics.dDown = 0;
    this.physics.dLeft *= MINI_METEOR_FRICTION;
    this.physics.dRight *= MINI_METEOR_FRICTION;
  }

  // fade() {

  // }
}

export default MiniMeteor;
