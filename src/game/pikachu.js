import Sprite from './sprite';

const pikachuStaticSpriteSheet = require('../assets/images/sprite_sheets/pikachu-standing.png');
const pikachuRunSpriteSheet = require('../assets/images/sprite_sheets/pikachu-running.png');

const pikachuStatic = new Image();
pikachuStatic.src = pikachuStaticSpriteSheet;

const pikachuRun = new Image();
pikachuRun.src = pikachuRunSpriteSheet;

const pikachuStaticSprite = new Sprite(pikachuStatic, 96, 161, 2, 4);
const pikachuRunSprite = new Sprite(pikachuRun, 74, 270, 2, 4);

class Pikachu {
  constructor(physics) {
    this.physics = physics;
    this.sprite = pikachuStaticSprite;
  }

  updateSprite() {
    this.sprite = pikachuRunSprite;
  }
}

export default Pikachu;
