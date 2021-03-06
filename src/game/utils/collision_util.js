// rectangle to rectangle collision
export const isRRCollided = (rect1, rect2) => {
  if (
    rect1.physics.x < rect2.physics.x + rect2.sprite.width
    && rect1.physics.x + rect1.sprite.width > rect2.physics.x
    && rect1.physics.y < rect2.physics.y + rect2.sprite.height
    && rect1.physics.y + rect1.sprite.height > rect2.physics.y
  ) return true;

  return false;
};

// reactangle to circle collision
export const isRCCollided = (rect, circle) => {
  // Find the vertical & horizontal (distX/distY) distances
  // between the circle’s center and the rectangle’s center
  const distX = Math.abs(circle.physics.x - rect.physics.x - rect.sprite.width / 2);
  const distY = Math.abs(circle.physics.y - rect.physics.y - rect.sprite.height / 2);


  // If the distance is greater than halfCircle + halfRect,
  // then they are too far apart to be colliding
  if (distX > (rect.sprite.width / 2 + circle.radius)) { return false; }
  if (distY > (rect.sprite.height / 2 + circle.radius)) { return false; }

  // If the distance is less than halfRect then they are definitely colliding
  if (distX <= (rect.sprite.width / 2)) { return true; }
  if (distY <= (rect.sprite.height / 2)) { return true; }

  // Test for collision at rect corner:
  //  + Think of a line from the rect center to any rect corner
  //  + Now extend that line by the radius of the circle
  //  + If the circle’s center is on that line they are colliding at exactly that rect corner
  // Using Pythagoras formula to compare the distance between circle and rect centers
  const dx = distX - rect.sprite.width / 2;
  const dy = distY - rect.sprite.height / 2;
  return (dx * dx + dy * dy <= (circle.radius * circle.radius));
};

// circle to circle collision
const distanceBetweenCircles = (circle1, circle2) => {
  const distX = circle2.physics.x - circle1.physics.x;
  const distY = circle2.physics.y - circle1.physics.y;

  return Math.sqrt((distX ** 2) + (distY ** 2));
};

export const isCCCollided = (circle1, circle2) => (
  distanceBetweenCircles(circle1, circle2) - circle1.radius - circle2.radius <= 0
);
