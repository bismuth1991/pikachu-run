import { randomPhysics, randomRadius, randomRotation } from '../utils/other_utils';
import { MAX_ROTATION } from '../constant';

class Bubble {
  constructor() {
    this.physics = randomPhysics();
    this.radius = randomRadius();

    this.maxRotation = MAX_ROTATION;
    this.rotation = randomRotation();
    this.rotationDirection = 'forward';
  }

  rotate() {
    if (this.rotationDirection === 'forward') {
      if (this.rotation < this.maxRotation) {
        this.rotation += 1;
      } else {
        this.rotationDirection = 'backward';
      }
    } else if (this.rotation > -this.maxRotation) {
      this.rotation -= 1;
    } else {
      this.rotationDirection = 'forward';
    }
  }
}

export default Bubble;
