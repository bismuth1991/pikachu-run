import Sprite from '../sprite';
import dragonitePhysics from './dragonite_random_generators';
import { NUM_DRAGONITE, DRAGONITE_METEORS_DEACTIVATION_X } from '../constant';
import Meteor from './meteor';

const dragoniteSpriteSheet = require('../../assets/images/dragonite.png');

const dragonite = new Image();
dragonite.src = dragoniteSpriteSheet;
const dragoniteSprite = new Sprite(dragonite, 376, 2640, 2, 11);

class Dragonite {
  constructor() {
    this.physics = dragonitePhysics();
    this.sprite = dragoniteSprite;
    this.sprite.isLeft = true;

    this.meteors = [];
    this.isMeteorsActivate = false;
  }

  static makeDragonites() {
    const dragonites = [];
    for (let i = 0; i < NUM_DRAGONITE; i += 1) {
      dragonites.push(new Dragonite());
    }
    return dragonites;
  }

  isOutOfBounds() {
    return this.physics.x + this.sprite.width < DRAGONITE_METEORS_DEACTIVATION_X;
  }

  resetPhysics() {
    this.physics = dragonitePhysics();
  }

  activateDracoMeteor() {
    this.meteors = Meteor.makeMeteor();
    this.isMeteorsActivate = true;
  }

  deactivateDracoMeteor() {
    this.meteors = [];
    this.isMeteorsActivate = false;
  }
}

export default Dragonite;
