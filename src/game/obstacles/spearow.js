import Sprite from '../sprite';

const spearowSpriteSheet = require('../../assets/images/spearow.png');

const spearowFly = new Image();
spearowFly.src = spearowSpriteSheet;
const spearowFlySprite = new Sprite(spearowFly, 53, 236, 1, 4);

class Spearow {
  constructor(physics) {
    this.physics = physics;
    this.sprite = spearowFlySprite;

    this.physics.dLeft = 15;
  }
}

export default Spearow;
