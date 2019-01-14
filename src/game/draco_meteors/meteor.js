import { randomPhysics, randomRadius, randomMeteorColor } from './meteor_random_generators';
import { BASE_Y, ENERGY_LOSS, NUM_METEORS } from '../constant';

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
    const { physics, radius } = this;
    return physics.y + radius + physics.dY() >= BASE_Y;
  }

  bounce() {
    const { physics } = this;
    physics.dUp = physics.dDown * ENERGY_LOSS;
    physics.dLeft *= ENERGY_LOSS;
    physics.dRight *= ENERGY_LOSS;
    physics.dDown = 0;
  }

  explosion() {
    this.radius -= 5;
  }
}

export default Meteor;
