import { isRCCollided, isRRCollided } from '../utils/collision_util';
import drawBubble from './draw_bubble';
import { drawPikachu, drawSpearow, drawDragonite, drawPrimeape } from './draw_asset';

class GameCanvas {
  constructor(canvas, ctx, initialAssets) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.assets = initialAssets;
  }

  static checkPikachuBubbleCollision(pikachu, bubble) {
    if (isRCCollided(pikachu, bubble)) bubble.pop();
  }

  static checkPikachuObstacleCollision(pikachu, obstacle) {
    if (isRRCollided(pikachu, obstacle)) console.log('collided');
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

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        const assets = Object.values(this.assets);
        const [pikachu, dragonites, primeapes, spearows, bubbles] = assets;

        drawPikachu(pikachu, this.ctx);

        for (let i = 0; i < dragonites.length; i += 1) {
          drawDragonite(dragonites[i], this.ctx);
        }

        for (let i = 0; i < primeapes.length; i += 1) {
          drawPrimeape(primeapes[i], this.ctx);
        }

        for (let i = 0; i < bubbles.length; i += 1) {
          drawBubble(bubbles[i], this.ctx);
          GameCanvas.checkPikachuBubbleCollision(pikachu, bubbles[i]);
        }

        for (let i = 0; i < spearows.length; i += 1) {
          drawSpearow(spearows[i], this.ctx);
          GameCanvas.checkPikachuObstacleCollision(pikachu, spearows[i]);
        }
      }
    };

    animate();
  }
}

export default GameCanvas;
