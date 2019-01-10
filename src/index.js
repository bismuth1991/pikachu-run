import GameCanvas from './game/game_canvas';

import './assets/css/normalize_8_0_1.css';
import './assets/css/canvas.css';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 500;

  const game = new GameCanvas(canvas, ctx);

  game.draw(10);
});
