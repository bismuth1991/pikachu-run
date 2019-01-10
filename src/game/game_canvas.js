import Pikachu from './pikachu';

class GameCanvas {
  constructor(canvas, ctx, assetsArray) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.assets = assetsArray;
    this.totalOffsetX = 0;
    this.totalOffsetY = 0;
  }

  drawAsset(asset) {
    const { physics, sprite } = asset;

    if (asset instanceof Pikachu) {
      // if (sprite.isMove) {
      // this.totalOffsetX += physics.dX();
      // this.totalOffsetY += physics.dY();
      // this.ctx.translate(physics.dX(), physics.dY());
      // }

      this.ctx.drawImage(
        sprite.image, sprite.srcX(), sprite.srcY(), sprite.width, sprite.height,
        physics.x, physics.y, sprite.width, sprite.height,
      );
    }
    // else {
    //   this.ctx.drawImage(
    //     sprite.image, sprite.srcX(), sprite.srcY(),
    //     sprite.width, sprite.height,
    //     physics.x - 2 * this.totalOffsetX, physics.y - 2 * this.totalOffsetY,
    //     sprite.width, sprite.height,
    //   );
    // }

    physics.updatePos();
    sprite.updateFrame();
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
          0 - this.totalOffsetX, 0 - this.totalOffsetY,
          this.canvas.width, this.canvas.height,
        );

        for (let i = 0; i < this.assets.length; i += 1) {
          this.drawAsset(this.assets[i]);
        }
      }
    };

    animate();
  }
}

export default GameCanvas;
