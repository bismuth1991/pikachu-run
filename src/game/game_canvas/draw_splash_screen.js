import {
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
} from '../constant';

export const drawSplashScreen = (ctx) => {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  ctx.font = '40px Comic Sans MS';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';

  ctx.fillText(
    'WELCOME!',
    CANVAS_WIDTH / 2,
    CANVAS_HEIGHT / 2 - 55,
  );

  ctx.font = '20px Comic Sans MS';
  ctx.fillText(
    'Press SPACEBAR to start',
    CANVAS_WIDTH / 2,
    CANVAS_HEIGHT / 2 + 10,
  );
  ctx.fillText(
    'Use A, D, W to move',
    CANVAS_WIDTH / 2,
    CANVAS_HEIGHT / 2 + 40,
  );
};

export const drawGameOver = (ctx, score) => {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  ctx.font = '40px Comic Sans MS';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';

  ctx.fillText(
    'GAME OVER',
    CANVAS_WIDTH / 2,
    CANVAS_HEIGHT / 2 - 55,
  );

  ctx.font = '20px Comic Sans MS';
  ctx.fillText(
    `Your Score is: ${score}`,
    CANVAS_WIDTH / 2,
    CANVAS_HEIGHT / 2 + 10,
  );
  ctx.fillText(
    'Press SPACEBAR to restart',
    CANVAS_WIDTH / 2,
    CANVAS_HEIGHT / 2 + 40,
  );
};
