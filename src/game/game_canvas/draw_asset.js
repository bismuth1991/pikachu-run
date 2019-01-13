const drawAsset = (asset, ctx) => {
  if (asset.isOutOfBounds()) asset.resetPhysics();

  const { physics, sprite } = asset;

  ctx.save();
  ctx.translate(physics.x, physics.y);

  ctx.drawImage(
    sprite.image, sprite.srcX(), sprite.srcY(), sprite.width, sprite.height,
    0, 0, sprite.width, sprite.height,
  );

  ctx.restore();

  physics.updatePos();
  sprite.updateFrame();
};

export const drawPikachu = (pikachu, ctx) => {
  drawAsset(pikachu, ctx);
};

export const drawObstacle = (obstacle, ctx) => {
  drawAsset(obstacle, ctx);
};
