import { GRAVITY, BASE_Y, ENERGY_LOSS } from './constant';

class Physics {
  constructor(x, y, mass) {
    this.x = x;
    this.y = y;
    this.mass = mass;
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
      this.dUp *= ENERGY_LOSS;
      this.dDown += GRAVITY * this.mass;
    }

    if (this.y + this.dY() + GRAVITY * this.mass > BASE_Y && this.mass !== 0) {
      this.y = BASE_Y;
      this.dDown = 0;
      this.dUp = 0;
    } else {
      this.y += this.dY();
    }
  }
}

export default Physics;
