import Sprite from '../sprite';

const pikachuStaticSpriteSheet = require('../../assets/images/pikachu-standing.png');
const pikachuRunRightSpriteSheet = require('../../assets/images/pikachu-running-right.png');
const pikachuRunLeftSpriteSheet = require('../../assets/images/pikachu-running-left.png');
const pikachuRunSpriteSheet = require('../../assets/images/pikachu-running.png');
const pikachuRollSpriteSheet = require('../../assets/images/pikachu-rolling.png');

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

export const pikachuStaticSprite = new Sprite(pikachuStatic, 96, 161, 2, 4);
export const pikachuRunRightSprite = new Sprite(pikachuRunRight, 48, 240, 1, 4);
export const pikachuRunLeftSprite = new Sprite(pikachuRunLeft, 48, 240, 1, 4);
export const pikachuRunSprite = new Sprite(pikachuRun, 96, 240, 2, 4);
export const pikachuRollSprite = new Sprite(pikachuRoll, 96, 192, 2, 4);
