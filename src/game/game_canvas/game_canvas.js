import drawBubble from './draw_bubble';
import { isRCCollided } from '../utils/collision_util';

class GameCanvas {
  constructor(canvas, ctx, initialAssets) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.assets = initialAssets;
  }

  static checkPikaBubblesCollision(pikachu, bubbles) {
    for (let i = 0; i < bubbles.length; i += 1) {
      if (isRCCollided(pikachu, bubbles[i])) {
        bubbles[i].pop();
      }
    }
  }

  drawAsset(asset) {
    if (asset.isOutOfBounds()) asset.resetPhysics();

    const { physics, sprite } = asset;

    this.ctx.save();
    this.ctx.translate(physics.x, physics.y);

    this.ctx.drawImage(
      sprite.image, sprite.srcX(), sprite.srcY(), sprite.width, sprite.height,
      0, 0, sprite.width, sprite.height,
    );

    this.ctx.restore();

    physics.updatePos();
    sprite.updateFrame();
  }

  draw(fps) {
    const fpsInterval = 1000 / fps;
    let then = performance.now();

    const animate = () => {
      requestAnimationFrame(animate);

      const assets = Object.values(this.assets);
      const [pikachu, bubbles, obstacles] = assets;

      const now = performance.now();
      const elapsed = now - then;

      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);

        this.ctx.clearRect(
          0, 0,
          this.canvas.width, this.canvas.height,
        );

        this.drawAsset(pikachu);

        for (let i = 0; i < bubbles.length; i += 1) {
          drawBubble(bubbles[i], this.ctx);
          GameCanvas.checkPikaBubblesCollision(pikachu, bubbles);
        }

        for (let j = 0; j < obstacles.length; j += 1) {
          this.drawAsset(obstacles[j], this.ctx);
        }
      }
    };

    animate();
  }
}

export default GameCanvas;
