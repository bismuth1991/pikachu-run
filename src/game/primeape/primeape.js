import {
  primeapeStaticSprite,
  primeapeRunSprite,
  primeapePunchSprite,
} from './primeape_sprite_sheets';
import { PRIMEAPE_SPEED } from '../constant';

class Primeape {
  constructor() {
    this.physics = primeapePhysics();
    this.sprite = primeapeStaticSprite;
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

  isOutOfBounds() {
    return this.physics + this.sprite.width < 0;
  }

  resetPhysics() {
    this.physics = primeapePhysics();
  }
}

export default Primeape;
