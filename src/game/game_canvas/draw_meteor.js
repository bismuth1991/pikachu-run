const drawMiniMeteor = (miniMeteor, ctx) => {
  ctx.save();
  ctx.translate(miniMeteor.physics.x, miniMeteor.physics.y);

  ctx.beginPath();
  ctx.arc(0, 0, miniMeteor.radius, 0, Math.PI * 2, false);

  ctx.shadowColor = miniMeteor.color;
  ctx.shadowBlur = 20;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  ctx.fillStyle = miniMeteor.color;
  ctx.fill();
  ctx.closePath();

  ctx.restore();

  if (miniMeteor.isHitGround()) miniMeteor.bounce();

  miniMeteor.physics.updatePos();
};

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

  if (meteor.miniMeteors.length > 0) {
    for (let i = 0; i < meteor.miniMeteors.length; i += 1) {
      const miniMeteor = meteor.miniMeteors[i];
      drawMiniMeteor(miniMeteor, ctx);

      miniMeteor.timeToLive -= 1;
      if (miniMeteor.timeToLive <= 0) {
        meteor.miniMeteors.splice(i, 1);
      }
    }
  }

  if (meteor.isHitGround()) {
    meteor.explosion();
    meteor.bounce();
  }

  meteor.physics.updatePos();
};


export default drawMeteor;
