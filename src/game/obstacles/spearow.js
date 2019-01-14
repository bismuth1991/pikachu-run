import Sprite from '../sprite';
import { randomSpearowPhysics } from './spearow_random_generators';
import { NUM_SPEAROWS } from '../constant';

const spearowSpriteSheet = require('../../assets/images/spearow-small.png');

const spearowFly = new Image();
spearowFly.src = spearowSpriteSheet;
const spearowFlySprite = new Sprite(spearowFly, 50, 224, 1, 4);

class Spearow {
  constructor() {
    this.physics = randomSpearowPhysics();
    this.sprite = spearowFlySprite;
  }

  static makeSpearows() {
    const spearows = [];
    for (let i = 0; i < NUM_SPEAROWS; i += 1) {
      spearows.push(new Spearow());
    }

    return spearows;
  }

  isOutOfBounds() {
    return this.physics.x + this.sprite.width < 0;
  }

  resetPhysics() {
    this.physics = randomSpearowPhysics();
  }
}

export default Spearow;
