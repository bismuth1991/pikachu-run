import Physics from '../physics';

import {
  BASE_Y,
  GRAVITY,
  PIKACHU_MASS,
  PIKACHU_JUMP_HEIGHT,
  PIKACHU_RUN_SPEED,
  CANVAS_WIDTH,
  PIKACHU_HEIGHT,
} from '../constant';

import {
  pikachuRollSprite,
  pikachuStaticSprite,
  pikachuRunSprite,
} from './pikachu_sprite_sheets';

class Pikachu {
  constructor() {
    this.physics = new Physics(0, BASE_Y - PIKACHU_HEIGHT, PIKACHU_MASS);
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

  stayOnGround() {
    const { physics } = this;
    if (physics.y + physics.dY() + GRAVITY * physics.mass > BASE_Y - PIKACHU_HEIGHT) {
      physics.y = BASE_Y - PIKACHU_HEIGHT;
      physics.dDown = 0;
      physics.dUp = 0;
    }
  }

  isOutOfBounds() {
    const { x } = this.physics;
    return (x < 0 || x + this.sprite.width > CANVAS_WIDTH);
  }

  resetPhysics() {
    const { x } = this.physics;

    if (x < 0) this.physics.x = 0;
    if (x + this.sprite.width > CANVAS_WIDTH) this.physics.x = CANVAS_WIDTH - this.sprite.width;
  }
}

export default Pikachu;
