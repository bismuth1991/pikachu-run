import Sprite from './sprite';

const pikachuStaticSpriteSheet = require('../assets/images/pikachu-standing.png');
const pikachuRunRightSpriteSheet = require('../assets/images/pikachu-running-right.png');
const pikachuRunLeftSpriteSheet = require('../assets/images/pikachu-running-left.png');
const pikachuRollSpriteSheet = require('../assets/images/pikachu-rolling.png');

const pikachuStatic = new Image();
pikachuStatic.src = pikachuStaticSpriteSheet;

const pikachuRunRight = new Image();
pikachuRunRight.src = pikachuRunRightSpriteSheet;

const pikachuRunLeft = new Image();
pikachuRunLeft.src = pikachuRunLeftSpriteSheet;

const pikachuRoll = new Image();
pikachuRoll.src = pikachuRollSpriteSheet;

const pikachuStaticSprite = new Sprite(pikachuStatic, 96, 161, 2, 4);
const pikachuRunRightSprite = new Sprite(pikachuRunRight, 96, 240, 1, 4);
const pikachuRunLeftSprite = new Sprite(pikachuRunLeft, 96, 240, 1, 4);
const pikachuRollSprite = new Sprite(pikachuRoll, 96, 192, 2, 4);

class Pikachu {
  constructor(physics) {
    this.physics = physics;
    this.sprite = new Sprite(pikachuStatic, 96, 161, 2, 4);
  }

  updateSprite() {
    if (this.physics.isJump) {
      this.sprite = pikachuRollSprite;
    } else if (this.physics.isRun && !this.physics.isRunLeft && !this.physics.isJump) {
      this.sprite = pikachuRunRightSprite;
    } else if (this.physics.isRun && this.physics.isRunLeft && !this.physics.isJump) {
      this.sprite = pikachuRunLeftSprite;
    } else if (this.physics.dX() === 0 && this.physics.dY() === 0) {
      this.sprite = pikachuStaticSprite;
    }
  }
}

export default Pikachu;
