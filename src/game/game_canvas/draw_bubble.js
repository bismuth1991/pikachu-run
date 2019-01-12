export const drawBubble = (bubble, ctx) => {
  bubble.rotate();

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

  bubble.physics.updatePos();
  bubble.resetPos();
};

export const drawPoppingLine = (line, ctx) => {
  line.updateValues();

  const { x, y, endX, endY } = line;

  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;

  ctx.moveTo(x, y);
  // if (line.x < line.bubble.position.x) {
  //   line.endX = line.lineLength * -1;
  // }
  // if (line.y < line.bubble.position.y) {
  //   line.endY = line.lineLength * -1;
  // }
  // if (line.y === line.bubble.position.y) {
  //   line.endY = 0;
  // }
  // if (line.x === line.bubble.position.x) {
  //   line.endX = 0;
  // }
  ctx.lineTo(x + endX, y + endY);
  ctx.stroke();
};
