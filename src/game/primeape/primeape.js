import {
  primeapeStaticSprite,
  primeapeRunSprite,
  primeapePunchSprite,
} from './primeape_sprite_sheets';

import {
  PRIMEAPE_SPEED,
  NUM_PRIMEAPES,
} from '../constant';

import { randomFromRange } from '../utils/other_utils';
import primeapePhysics from './primeape_generator';

class Primeape {
  constructor() {
    this.physics = primeapePhysics();
    this.sprite = primeapeRunSprite;
    this.framesPassed = 0;
  }

  static makePrimeapes() {
    const primeapes = [];
    for (let i = 0; i < NUM_PRIMEAPES; i += 1) {
      primeapes.push(new Primeape());
    }
    return primeapes;
  }

  updateFramesPassed() {
    this.framesPassed += 1;
  }

  resetFramesPassed() {
    this.framesPassed = 0;
  }

  run() {
    this.sprite = primeapeRunSprite;
    this.physics.dLeft = PRIMEAPE_SPEED;
  }

  stop() {
    this.sprite = primeapeStaticSprite;
    this.physics.dLeft = 0;
  }

  punch() {
    this.sprite = primeapePunchSprite;
    this.physics.dLeft = 0;
  }

  randomAction() {
    const randomNumber = randomFromRange(1, 3);
    if (randomNumber === 1) {
      this.stop();
    }
    if (randomNumber === 2) {
      this.run();
    }
    if (randomNumber === 3) {
      this.punch();
    }
  }

  isOutOfBounds() {
    return this.physics.x + this.sprite.width < 0;
  }

  resetPhysics() {
    this.physics = primeapePhysics();
  }
}

export default Primeape;
