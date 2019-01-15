import { DRAGONITE_METEORS_ACTIVATION_X } from '../constant';
import drawMeteor from './draw_meteor';

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
  pikachu.stayOnGround();
  drawAsset(pikachu, ctx);
};

export const drawDragonite = (dragonite, ctx) => {
  drawAsset(dragonite, ctx);

  if (dragonite.physics.x < DRAGONITE_METEORS_ACTIVATION_X && !dragonite.isMeteorsActivate) {
    dragonite.activateDracoMeteor();
  }

  if (dragonite.meteors.length > 0) {
    for (let i = 0; i < dragonite.meteors.length; i += 1) {
      drawMeteor(dragonite.meteors[i], ctx);
    }
  }

  if (dragonite.isOutOfBounds()) {
    // dragonite.resetPhysics();
    dragonite.deactivateDracoMeteor();
  }
};

export const drawPrimeape = (primeape, ctx) => {
  drawAsset(primeape, ctx);
  primeape.updateFramesPassed();

  if (primeape.framesPassed > 20) {
    primeape.randomAction();
    primeape.resetFramesPassed();
  }
};

export const drawObstacle = (obstacle, ctx) => {
  drawAsset(obstacle, ctx);
};
