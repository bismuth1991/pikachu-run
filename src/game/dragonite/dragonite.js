import Sprite from '../sprite';
import dragonitePhysics from './dragonite_random_generators';
import { NUM_DRAGONITE, DRAGONITE_METEORS_DEACTIVATION_X } from '../constant';
import Meteor from './meteor';

const dragoniteSpriteSheet = require('../../assets/images/dragonite-small.png');

const dragonite = new Image();
dragonite.src = dragoniteSpriteSheet;
const dragoniteSprite = new Sprite(dragonite, 252, 1760, 2, 11);

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

  static getCanvasBackground() {
    return document.getElementsByClassName('canvas-container')[0];
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

    const canvasBackground = Dragonite.getCanvasBackground();
    canvasBackground.classList.add('filter-invert');
  }

  deactivateDracoMeteor() {
    this.meteors = [];
    this.isMeteorsActivate = false;

    const canvasBackground = Dragonite.getCanvasBackground();
    canvasBackground.classList.remove('filter-invert');
  }
}

export default Dragonite;
