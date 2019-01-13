import drawBubble from './draw_bubble';
import { isRCCollided } from '../utils/collision_util';
import { drawPikachu, drawObstacle } from './draw_asset';

class GameCanvas {
  constructor(canvas, ctx, initialAssets) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.assets = initialAssets;
  }

  static checkPikachuBubblesCollision(pikachu, bubble) {
    if (isRCCollided(pikachu, bubble)) bubble.pop();
  }

  draw(fps) {
    const fpsInterval = 1000 / fps;
    let then = performance.now();

    const animate = () => {
      requestAnimationFrame(animate);

      const now = performance.now();
      const elapsed = now - then;

      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);

        this.ctx.clearRect(
          0, 0,
          this.canvas.width, this.canvas.height,
        );

        const assets = Object.values(this.assets);
        const [pikachu, bubbles, obstacles] = assets;

        drawPikachu(pikachu, this.ctx);

        for (let i = 0; i < bubbles.length; i += 1) {
          drawBubble(bubbles[i], this.ctx);
          GameCanvas.checkPikachuBubblesCollision(pikachu, bubbles[i]);
        }

        for (let i = 0; i < obstacles.length; i += 1) {
          drawObstacle(obstacles[i], this.ctx);
        }
      }
    };

    animate();
  }
}

export default GameCanvas;
