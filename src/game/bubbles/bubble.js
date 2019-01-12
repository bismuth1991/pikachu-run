import { randomPhysics, randomRadius, randomRotation } from '../utils/other_utils';
import { MAX_ROTATION, CANVAS_HEIGHT, CANVAS_WIDTH } from '../constant';

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

  resetPos() {
    const { x, y } = this.physics;

    if (x > CANVAS_WIDTH || x < 0 || y > CANVAS_HEIGHT || y < 0) {
      this.physics = randomPhysics();
    }
  }
}

export default Bubble;
