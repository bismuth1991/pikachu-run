import { isRCCollided } from '../utils/collision_util';
import { BUBBLE_POINTS } from '../constant';

const drawPoppingLine = (line, ctx) => {
  line.getValues();

  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;

  ctx.moveTo(line.x, line.y);

  ctx.lineTo(line.x + line.endX, line.y + line.endY);
  ctx.stroke();

  line.updateValues();
};

const drawBubble = (bubble, pikachu, ctx) => {
  if (isRCCollided(pikachu, bubble, ctx)) {
    bubble.pop();
    pikachu.addPoints(BUBBLE_POINTS);
  }

  bubble.rotate();

  if (!bubble.isPop) {
    ctx.save();
    ctx.translate(bubble.physics.x, bubble.physics.y);
    ctx.rotate(bubble.rotation * Math.PI / 180);

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.arc(0, 0, bubble.radius - 3, 0, Math.PI * 1.5, true);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, bubble.radius, 0, Math.PI * 2, false);
    ctx.stroke();

    ctx.restore();

    if (bubble.isOutOfBounds()) bubble.resetPhysics();
  } else {
    for (let i = 0; i < bubble.lines.length; i += 1) {
      drawPoppingLine(bubble.lines[i], ctx);
    }
  }

  bubble.physics.updatePos();
};

const drawBubbles = (bubbles, pikachu, ctx) => {
  for (let i = 0; i < bubbles.length; i += 1) {
    drawBubble(bubbles[i], pikachu, ctx);
  }
};

export default drawBubbles;
