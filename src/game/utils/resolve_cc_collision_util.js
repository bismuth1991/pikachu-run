// Rotates coordinate system for velocities
// Takes velocities and alters them as if the coordinate system they're on was rotated
// @param  Object | velocity | The velocity of an individual circle
// @param  Float  | angle    | The angle of collision between two objects in radians
// @return Object | The altered x and y velocities after the coordinate system has been rotated

const rotate = (dX, dY, angle) => ({
  dX: dX * Math.cos(angle) - dY * Math.sin(angle),
  dY: dX * Math.sin(angle) + dY * Math.cos(angle),
});


// Swaps out two colliding circles' x and y velocities after running through
// an elastic collision reaction equation
// @param  Object | circle      | A circle object with x and y coordinates, plus velocity
// @param  Object | circle2 | A circle object with x and y coordinates, plus velocity
// @return Object | null

const resolveCCCollision = (circle1, circle2) => {
  const xVelocityDiff = circle1.physics.dX - circle2.physics.dX;
  const yVelocityDiff = circle1.physics.dY - circle2.physics.dY;

  const xDist = circle2.physics.x - circle1.physics.x;
  const yDist = circle2.physics.y - circle1.physics.y;

  // Prevent accidental overlap of circles
  if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
    // Grab angle between the two colliding circles
    const angle = -Math.atan2(
      circle2.physics.y - circle1.physics.y,
      circle2.physics.x - circle1.physics.x,
    );

    // Store mass in var for better readability in collision equation
    const m1 = circle1.mass;
    const m2 = circle2.mass;

    // Velocity before equation
    const u1 = rotate(circle1.physics.dX, circle1.physics.dY, angle);
    const u2 = rotate(circle2.physics.dX, circle2.physics.dY, angle);

    // Velocity after 1d collision equation
    const v1 = {
      dX: u1.dX * (m1 - m2) / (m1 + m2) + u2.dX * 2 * m2 / (m1 + m2),
      dY: u1.dY,
    };
    const v2 = {
      dX: u2.dX * (m1 - m2) / (m1 + m2) + u1.dX * 2 * m2 / (m1 + m2),
      dY: u2.dY,
    };

    // Final velocity after rotating axis back to original location
    const vFinal1 = rotate(v1.dX, v1.dY, -angle);
    const vFinal2 = rotate(v2.dX, v2.dY, -angle);

    // Swap particle velocities for realistic bounce effect
    circle1.physics.dX = vFinal1.dX;
    circle1.physics.dY = vFinal1.dY;
    circle2.physics.dX = vFinal2.dX;
    circle2.physics.dY = vFinal2.dY;
  }
};

export default resolveCCCollision;
