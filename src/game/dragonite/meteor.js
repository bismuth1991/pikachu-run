import { randomPhysics, randomRadius, randomMeteorColor } from './meteor_random_generators';
import { BASE_Y, NUM_METEORS, METEOR_FRICTION, NUM_MINI_METEORS } from '../constant';
import MiniMeteor from './mini_meteor';

class Meteor {
  constructor() {
    this.physics = randomPhysics();
    this.radius = randomRadius();
    this.color = randomMeteorColor();

    this.miniMeteors = [];
  }

  static makeMeteor() {
    const meteors = [];
    for (let i = 0; i < NUM_METEORS; i += 1) {
      meteors.push(new Meteor());
    }

    return meteors;
  }

  isHitGround() {
    return this.physics.y + this.radius > BASE_Y;
  }

  bounce() {
    this.physics.dUp = this.physics.dDown * METEOR_FRICTION;
    this.physics.dDown = 0;
    this.physics.dLeft *= METEOR_FRICTION;
    this.physics.dRight *= METEOR_FRICTION;
  }

  explosion() {
    for (let i = 0; i < NUM_MINI_METEORS; i += 1) {
      this.miniMeteors.push(new MiniMeteor(this.physics.x, this.physics.y, this.color));
    }

    if (this.radius <= 15) this.reset();
    this.radius -= 5;
  }

  reset() {
    this.physics = randomPhysics();
    this.radius = randomRadius();
    this.color = randomMeteorColor();
  }
}

export default Meteor;
