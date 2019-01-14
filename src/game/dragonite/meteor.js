import { randomPhysics, randomRadius, randomMeteorColor } from './meteor_random_generators';
import { BASE_Y, NUM_METEORS, METEOR_FRICTION } from '../constant';

class Meteor {
  constructor() {
    this.physics = randomPhysics();
    this.radius = randomRadius();
    this.color = randomMeteorColor();
  }

  static makeMeteor() {
    const meteors = [];
    for (let i = 0; i < NUM_METEORS; i += 1) {
      meteors.push(new Meteor());
    }

    return meteors;
  }

  isHitGround() {
    return this.physics.y >= BASE_Y;
  }

  bounce() {
    const { physics } = this;
    physics.dUp = physics.dDown * METEOR_FRICTION;
    physics.dLeft *= METEOR_FRICTION;
    physics.dRight *= METEOR_FRICTION;
    physics.dDown = 0;
  }

  explosion() {
    if (this.radius <= 5) this.reset();
    this.radius -= 5;
  }

  reset() {
    this.physics = randomPhysics();
    this.radius = randomRadius();
    this.color = randomMeteorColor();
  }
}

export default Meteor;
