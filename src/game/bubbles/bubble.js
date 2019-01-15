import PoppingLine from './popping_line';

import {
  bubblePhysics,
  bubbleRadius,
  bubbleRotation,
} from './bubble_generator';

import {
  NUM_BUBBLES,
  NUM_POPPING_LINES,
  MAX_ROTATION,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
} from '../constant';

class Bubble {
  constructor() {
    this.physics = bubblePhysics();
    this.radius = bubbleRadius();

    this.isPop = false;
    this.maxRotation = MAX_ROTATION;
    this.rotation = bubbleRotation();
    this.rotationDirection = 'forward';

    this.lines = [];
    for (let i = 0; i < NUM_POPPING_LINES; i += 1) {
      this.lines.push(new PoppingLine(this, i));
    }
  }

  static makeBubbles() {
    const bubbles = [];
    for (let i = 0; i < NUM_BUBBLES; i += 1) {
      bubbles.push(new Bubble());
    }

    return bubbles;
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
    this.physics = bubblePhysics();
  }

  isOutOfBounds() {
    return (this.physics.x > CANVAS_WIDTH || this.physics.x < 0 || this.physics.y > CANVAS_HEIGHT);
  }
}

export default Bubble;
