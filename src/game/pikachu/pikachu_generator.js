import Sprite from '../utils/sprite';
import Physics from '../utils/physics';

import {
  SPAWN_X,
  SPAWN_Y,
  IGNORE_GRAVITY,
} from '../constant';

const pikachuStaticSpriteSheet = require('../../assets/images/pikachu-standing.png');
const pikachuRunRightSpriteSheet = require('../../assets/images/pikachu-running-right.png');
const pikachuRunLeftSpriteSheet = require('../../assets/images/pikachu-running-left.png');
const pikachuRunSpriteSheet = require('../../assets/images/pikachu-running.png');
const pikachuRollSpriteSheet = require('../../assets/images/pikachu-rolling.png');
const pikachuTakeDamageSpriteSheet = require('../../assets/images/pikachu-take-damage.png');

const pikachuStatic = new Image();
pikachuStatic.src = pikachuStaticSpriteSheet;

const pikachuRunRight = new Image();
pikachuRunRight.src = pikachuRunRightSpriteSheet;

const pikachuRunLeft = new Image();
pikachuRunLeft.src = pikachuRunLeftSpriteSheet;

const pikachuRun = new Image();
pikachuRun.src = pikachuRunSpriteSheet;

const pikachuRoll = new Image();
pikachuRoll.src = pikachuRollSpriteSheet;

const pikachuTakeDamage = new Image();
pikachuTakeDamage.src = pikachuTakeDamageSpriteSheet;

export const pikachuStaticSprite = new Sprite(pikachuStatic, 96, 161, 2, 4);
export const pikachuRunRightSprite = new Sprite(pikachuRunRight, 48, 240, 1, 4);
export const pikachuRunLeftSprite = new Sprite(pikachuRunLeft, 48, 240, 1, 4);
export const pikachuRunSprite = new Sprite(pikachuRun, 96, 240, 2, 4);
export const pikachuRollSprite = new Sprite(pikachuRoll, 96, 192, 2, 4);
export const pikachuTakeDamageSprite = new Sprite(pikachuTakeDamage, 96, 294, 2, 6);

export const pikachuPhysics = () => new Physics(
  SPAWN_X,
  SPAWN_Y,
  IGNORE_GRAVITY,
);
