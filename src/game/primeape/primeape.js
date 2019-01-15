import {
  primeapeStaticSprite,
  primeapeRunSprite,
  primeapePunchSprite,
} from './primeape_sprite_sheets';
import primeapePhysics from './primeape_generator';
import { PRIMEAPE_SPEED, NUM_PRIMEAPES } from '../constant';
import { randomFromRange } from '../utils/other_utils';

class Primeape {
  constructor() {
    this.physics = primeapePhysics();
    this.sprite = primeapeStaticSprite;
    this.framesPassed = 0;
  }

  static makePrimeapes() {
    const primeapes = [];
    for (let i = 0; i < NUM_PRIMEAPES; i += 1) {
      primeapes.push(new Primeape());
    }
  }

  run() {
    this.sprite = primeapeRunSprite;
    this.dLeft = PRIMEAPE_SPEED;
  }

  stop() {
    this.sprite = primeapeStaticSprite;
    this.dLeft = 0;
  }

  punch() {
    this.sprite = primeapePunchSprite;
    this.dLeft = 0;
  }

  randomAction() {
    const randomNumer = randomFromRange(1, 3);
    if (randomNumer === '1') {
      this.stop();
    }
    if (randomNumer === '2') {
      this.run();
    }
    if (randomNumer === '3') {
      this.punch();
    }
  }

  isOutOfBounds() {
    return this.physics + this.sprite.width < 0;
  }

  resetPhysics() {
    this.physics = primeapePhysics();
  }
}

export default Primeape;
