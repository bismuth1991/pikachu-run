import { drawPikachu } from './draw_asset';
import drawPoints from './draw_points';
import drawDragonites from './draw_dragonites';
import drawPrimeapes from './draw_primeapes';
import drawBubbles from './draw_bubbles';
import drawSpearows from './draw_spearows';

class GameCanvas {
  constructor(canvas, ctx, initialAssets) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.assets = initialAssets;
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

        drawSpearows(spearows, pikachu, this.ctx);
        drawPrimeapes(primeapes, pikachu, this.ctx);
        drawDragonites(dragonites, pikachu, this.ctx);
        drawBubbles(bubbles, pikachu, this.ctx);

        drawPikachu(pikachu, this.ctx);

        drawPoints(pikachu.points, this.ctx);
      }
    };

    animate();
  }
}

export default GameCanvas;
