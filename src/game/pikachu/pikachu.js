import {
  pikachuRollSprite,
  pikachuStaticSprite,
  pikachuRunSprite,
} from './pikachu_sprite_sheets';

class Pikachu {
  constructor(physics) {
    this.physics = physics;
    this.sprite = pikachuStaticSprite;
    this.isADPress = false;
    this.isLeft = false;
  }

  handleMovementKeyDown(key) {
    if (key === 'w') {
      this.sprite = pikachuRollSprite;
      this.sprite.isLeft = this.isLeft;
      this.physics.dUp = 50;
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
    if (this.physics.dX() === 0 && this.physics.dY() <= 30) {
      this.sprite = pikachuStaticSprite;
      this.sprite.isLeft = this.isLeft;
    }
  }
}

export default Pikachu;
