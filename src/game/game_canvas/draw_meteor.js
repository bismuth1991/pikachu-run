const drawMeteor = (meteor, ctx) => {
  ctx.save();
  ctx.translate(meteor.physics.x, meteor.physics.y);

  ctx.beginPath();
  ctx.arc(0, 0, meteor.radius, 0, Math.PI * 2, false);

  ctx.shadowColor = meteor.color;
  ctx.shadowBlur = 20;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  ctx.fillStyle = meteor.color;
  ctx.fill();
  ctx.closePath();

  ctx.restore();

  if (meteor.isHitGround()) {
    meteor.explosion();
    meteor.bounce();
  }

  meteor.physics.updatePos();
};

export default drawMeteor;