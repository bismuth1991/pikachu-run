import GameCanvas from './game/game_canvas';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 400;

  const game = new GameCanvas(canvas, ctx);

  game.draw(10);
});
