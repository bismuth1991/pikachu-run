import GameCanvas from './game/game_canvas/game_canvas';
import setupControlListeners from './game/pikachu/pikachu_controls';
import { initialAssets } from './game/assets';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from './game/constant';


import './assets/css/normalize_8_0_1.css';
import './assets/css/canvas.css';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;

  const game = new GameCanvas(canvas, ctx, initialAssets);
  game.draw(15);

  setupControlListeners(game);
});
