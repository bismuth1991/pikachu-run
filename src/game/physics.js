import { gravity, baseY } from './constant';

class Physics {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dLeft = 0;
    this.dRight = 0;
    this.dUp = 0;
    this.dDown = 0;
  }

  dX() {
    return -this.dLeft + this.dRight;
  }

  dY() {
    return -this.dUp + this.dDown;
  }

  updatePos() {
    this.x += this.dX();

    if (this.dUp > 0) {
      this.dUp -= gravity;
      this.dDown += gravity;
    }

    if (this.y + this.dY() + gravity > baseY) {
      this.y = baseY;
      this.dDown = 0;
    } else {
      this.y += this.dY();
    }
  }
}

export default Physics;
