import GameCanvas from './game/game_canvas';
import setupControlListeners from './game/pikachu_controls';
import { assetsArray } from './game/assets';

import './assets/css/normalize_8_0_1.css';
import './assets/css/canvas.css';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 500;

  // setupControlListeners();
  const game = new GameCanvas(canvas, ctx, assetsArray);
  game.draw(10);

  setupControlListeners(game);
});
