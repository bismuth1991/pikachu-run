import Sprite from '../sprite';
import { randomSpearowPhysics } from '../utils/random_generator_utils';

const spearowSpriteSheet = require('../../assets/images/spearow-small.png');

const spearowFly = new Image();
spearowFly.src = spearowSpriteSheet;
const spearowFlySprite = new Sprite(spearowFly, 50, 224, 1, 4);

class Spearow {
  constructor() {
    this.physics = randomSpearowPhysics();
    this.sprite = spearowFlySprite;
  }

  isOutOfBounds() {
    return this.physics.x < 0;
  }

  resetPhysics() {
    this.physics = randomSpearowPhysics();
  }
}

export default Spearow;
