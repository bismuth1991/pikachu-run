const drawPoints = (score, lifeLeft, ctx) => {
  ctx.font = '20px Comic Sans MS';
  ctx.textAlign = 'left';
  ctx.fillStyle = 'black';

  ctx.fillText(
    `Score: ${score}     Life count: ${lifeLeft}`,
    30,
    30,
  );
};

export default drawPoints;
