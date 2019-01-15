import { drawPikachu } from './draw_asset';
import drawPoints from './draw_points';
import drawDragonites from './draw_dragonites';
import drawPrimeapes from './draw_primeapes';
import drawBubbles from './draw_bubbles';
import drawSpearows from './draw_spearows';
import { PIKACHU_MASS } from '../constant';
import initialAssets from './assets';

import {
  drawSplashScreen,
  drawGameOver,
} from './draw_splash_screen';

import {
  removeCanvasFilterInvert,
  playAudio,
} from '../domManipulators';

class GameCanvas {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.assets = initialAssets();
    this.state = 'begin';
  }

  begin() {
    this.state = 'begin';
  }

  play() {
    removeCanvasFilterInvert();
    playAudio();
    this.assets = initialAssets();
    this.state = 'start';
  }

  gameOver() {
    this.state = 'gameOver';
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

        if (pikachu.lifeLeft <= 0) {
          this.gameOver(pikachu);
          pikachu.faint();
        }

        drawPikachu(pikachu, this.ctx);

        if (this.state === 'begin') {
          drawSplashScreen(this.ctx);
        } else if (this.state === 'gameOver') {
          drawGameOver(this.ctx, pikachu.points);
        } else {
          pikachu.physics.mass = PIKACHU_MASS;
          pikachu.isKeyLock = false;

          drawSpearows(spearows, pikachu, this.ctx);
          drawPrimeapes(primeapes, pikachu, this.ctx);
          drawDragonites(dragonites, pikachu, this.ctx);
          drawBubbles(bubbles, pikachu, this.ctx);

          drawPoints(pikachu.points, pikachu.lifeLeft, this.ctx);
        }
      }
    };

    animate();
  }
}

export default GameCanvas;
