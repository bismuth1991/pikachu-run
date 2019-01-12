class PoppingLine {
  constructor(originatedBubble, index) {
    this.bubble = originatedBubble;
    this.index = index;

    this.lineLength = 0;
    this.popDistance = 0;
    this.maxPopDistant = this.bubble.radius * 0.3;
    this.popDistanceReturn = 0;
    this.inversePop = false;
  }

  resetValues() {
    this.lineLength = 0;
    this.popDistance = 0;
    this.popDistanceReturn = 0;
    this.inversePop = false;
  }

  getValues() {
    const { bubble, popDistanceReturn, popDistance, index } = this;

    this.x = bubble.physics.x
      + (bubble.radius + popDistanceReturn) * Math.cos(2 * Math.PI * index / bubble.lines.length);
    this.y = bubble.physics.y
      + (bubble.radius + popDistanceReturn) * Math.sin(2 * Math.PI * index / bubble.lines.length);

    this.lineLength = bubble.radius * popDistance;
    this.endX = this.lineLength;
    this.endY = this.lineLength;

    if (this.x < bubble.physics.x) {
      this.endX = -this.lineLength;
    }
    if (this.y < bubble.physics.y) {
      this.endY = -this.lineLength;
    }
    if (this.y === bubble.physics.y) {
      this.endY = 0;
    }
    if (this.x === bubble.physics.x) {
      this.endX = 0;
    }
  }

  updateValues() {
    if (this.lineLength < this.maxPopDistant && !this.inversePop) {
      this.popDistance += 0.06;
    } else if (this.popDistance >= 0) {
      this.inversePop = true;
      this.popDistanceReturn += 1;
      this.popDistance -= 0.03;
    } else {
      this.resetValues();
      this.bubble.resetPhysics();
      this.bubble.isPop = false;
    }
  }
}

export default PoppingLine;
