import {
  pikachuStaticSprite,
  pikachuRollSprite,
  pikachuRunRightSprite,
  pikachuRunLeftSprite,
} from './pikachu_sprite_sheets';

class Pikachu {
  constructor(physics) {
    this.physics = physics;
    this.sprite = pikachuStaticSprite;
  }

  isJump() {
    return this.physics.isJump;
  }

  isRunRight() {
    return this.physics.isRun && !this.physics.isRunLeft && !this.physics.isJump;
  }

  isRunLeft() {
    return this.physics.isRun && this.physics.isRunLeft && !this.physics.isJump;
  }

  isStatic() {
    return this.physics.dX() === 0 && this.physics.dY() === 0;
  }

  updateSprite() {
    if (this.isJump()) {
      this.sprite = pikachuRollSprite;
    } else if (this.isRunRight()) {
      this.sprite = pikachuRunRightSprite;
    } else if (this.isRunLeft()) {
      this.sprite = pikachuRunLeftSprite;
    } else if (this.isStatic()) {
      this.sprite = pikachuStaticSprite;
    }
  }
}

export default Pikachu;
