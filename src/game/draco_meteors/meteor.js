import { randomPhysics, randomRadius } from './meteor_random_generators';

class Meteor {
  constructor() {
    this.physics = randomPhysics();
    this.radius = randomRadius();
    this.color = 'red';
  }
}

export default Meteor;
