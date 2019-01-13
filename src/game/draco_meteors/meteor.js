import { randomPhysics, randomRadius, randomMeteorColor } from './meteor_random_generators';

class Meteor {
  constructor() {
    this.physics = randomPhysics();
    this.radius = randomRadius();
    this.color = randomMeteorColor();
  }
}

export default Meteor;
