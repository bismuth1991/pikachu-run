const drawPoints = (points, ctx) => {
  ctx.font = '20px Comic Sans MS';
  ctx.textAlign = 'left';
  ctx.fillStyle = 'black';
  ctx.fillText(points, 30, 30);
};

export default drawPoints;
