import { randomPhysics, randomRadius, randomRotation } from '../utils/other_utils';
import { MAX_ROTATION, CANVAS_HEIGHT, CANVAS_WIDTH } from '../constant';
import PoppingLine from './popping_line';

class Bubble {
  constructor() {
    this.physics = randomPhysics();
    this.radius = randomRadius();

    this.isPop = false;
    this.maxRotation = MAX_ROTATION;
    this.rotation = randomRotation();
    this.rotationDirection = 'forward';

    this.lines = [];
    for (let i = 0; i < 6; i += 1) {
      this.lines.push(new PoppingLine(this, i));
    }
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

  pop() {
    this.isPop = true;
  }

  resetPhysics() {
    this.physics = randomPhysics();
  }

  isOutOfBounds() {
    const { x, y } = this.physics;
    return (x > CANVAS_WIDTH || x < 0 || y > CANVAS_HEIGHT || y < 0);
  }
}

export default Bubble;
