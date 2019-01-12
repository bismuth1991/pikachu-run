import Physics from '../physics';
import { BASE_Y, PIKACHU_MASS } from '../constant';

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

  handleMovementKeyDown(key) {
    if (key === 'w') {
      this.sprite = pikachuRollSprite;
      this.sprite.isLeft = this.isLeft;
      this.physics.dUp = 55;
    }
    if (key === 'a') {
      if (this.isADPress) return;
      this.isADPress = true;
      this.isLeft = true;
      this.sprite = pikachuRunSprite;
      this.sprite.isLeft = this.isLeft;
      this.physics.dLeft = 20;
    }
    if (key === 'd') {
      if (this.isADPress) return;
      this.isADPress = true;
      this.isLeft = false;
      this.sprite = pikachuRunSprite;
      this.sprite.isLeft = this.isLeft;
      this.physics.dRight = 20;
    }
  }

  handleMovementKeyUp(key) {
    if (key === 'd') {
      this.isADPress = false;
      this.physics.dRight = 0;
    }
    if (key === 'a') {
      this.isADPress = false;
      this.physics.dLeft = 0;
    }
    // if (this.physics.dX() === 0 && this.physics.dY() <= 30) {
    if (this.physics.dX() === 0) {
      this.sprite = pikachuStaticSprite;
      this.sprite.isLeft = this.isLeft;
    }
  }
}

export default Pikachu;
