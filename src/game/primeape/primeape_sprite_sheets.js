import Sprite from '../sprite';

const primeapeStaticSpriteSheet = require('../../assets/images/primeape-stand.png');
const primeapeRunSpriteSheet = require('../../assets/images/primeape-run.png');
const primeapePunchSpriteSheet = require('../../assets/images/primeape-focus-punch.png');

const primeapeStatic = new Image();
primeapeStatic.src = primeapeStaticSpriteSheet;

const primeapeRun = new Image();
primeapeRun.src = primeapeRunSpriteSheet;

const primeapePunch = new Image();
primeapePunch.src = primeapePunchSpriteSheet;

export const primeapeStaticSprite = new Sprite(primeapeStatic, 69, 748, 1, 11);
export const primeapeRunSprite = new Sprite(primeapeRun, 69, 740, 1, 10);
export const primeapePunchSprite = new Sprite(primeapePunch, 69, 1560, 1, 12);
