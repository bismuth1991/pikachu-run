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

const drawBubble = (bubble, ctx) => {
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

export default drawBubble;
