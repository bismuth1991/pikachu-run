const drawBubble = (bubble, ctx) => {
  bubble.rotate();

  ctx.save();
  ctx.rotate(bubble.rotation * Math.PI / 180);

  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;
  ctx.arc(bubble.physics.x, bubble.physics.y, bubble.radius - 3, 0, Math.PI * 1.5, true);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(bubble.physics.x, bubble.physics.y, bubble.radius, 0, Math.PI * 2, false);
  ctx.stroke();

  ctx.restore();
};

export default drawBubble;
