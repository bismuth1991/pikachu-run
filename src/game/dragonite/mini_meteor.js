import { BASE_Y, MINI_METEOR_FRICTION } from '../constant';
import { randomMiniMeteorPhysics } from './meteor_random_generators';

class MiniMeteor {
  constructor(x, y, color) {
    this.physics = randomMiniMeteorPhysics(x, y);
    this.radius = 2;
    this.color = color;
    this.timeToLive = 50;
  }

  isHitGround() {
    return this.physics.y <= BASE_Y;
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
