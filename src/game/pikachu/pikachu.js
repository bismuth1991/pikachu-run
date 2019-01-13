import Physics from '../physics';
import { BASE_Y, PIKACHU_MASS, PIKACHU_JUMP_HEIGHT, PIKACHU_RUN_SPEED } from '../constant';

import {
  pikachuRollSprite,
  pikachuStaticSprite,
  pikachuRunSprite,
} from './pikachu_sprite_sheets';

class Pikachu {
  constructor() {
    this.physics = new Physics(0, BASE_Y, PIKACHU_MASS);
    this.sprite = pikachuStaticSprite;
    this.isADPress = false;
    this.isLeft = false;
  }

  jump() {
    this.sprite = pikachuRollSprite;
    this.sprite.isLeft = this.isLeft;
    this.physics.dUp = PIKACHU_JUMP_HEIGHT;
  }

  runLeft() {
    if (this.isADPress) return;
    this.isADPress = true;
    this.isLeft = true;
    this.sprite = pikachuRunSprite;
    this.sprite.isLeft = this.isLeft;
    this.physics.dLeft = PIKACHU_RUN_SPEED;
  }

  runRight() {
    if (this.isADPress) return;
    this.isADPress = true;
    this.isLeft = false;
    this.sprite = pikachuRunSprite;
    this.sprite.isLeft = this.isLeft;
    this.physics.dRight = PIKACHU_RUN_SPEED;
  }

  stop(keyUp) {
    if (keyUp === 'd') {
      this.isADPress = false;
      this.physics.dRight = 0;
    }
    if (keyUp === 'a') {
      this.isADPress = false;
      this.physics.dLeft = 0;
    }
    if (this.physics.dX() === 0) {
      this.sprite = pikachuStaticSprite;
      this.sprite.isLeft = this.isLeft;
    }
  }

  isOutOfBounds() {
    return false;
  }
}

export default Pikachu;
