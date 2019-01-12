class PoppingLine {
  constructor(originatedBubble, index) {
    this.bubble = originatedBubble;
    this.index = index;

    this.lineLength = 0;
    this.popDistance = 0;
    this.popDistanceReturn = 0;
    this.inversePop = false;
    this.popping = false;
  }

  resetValues() {
    this.lineLength = 0;
    this.popDistance = 0;
    this.popDistanceReturn = 0;
    this.inversePop = false;
    this.popping = false;

    this.updateValues();
  }

  updateValues() {
    const { bubble, popDistanceReturn, popDistance, index } = this;

    this.x = bubble.physics.x
      + (bubble.radius + popDistanceReturn) * Math.cos(2 * Math.PI * index / bubble.lines.length);
    this.y = bubble.physics.y
      + (bubble.radius + popDistanceReturn) * Math.sin(2 * Math.PI * index / bubble.lines.length);

    this.lineLength = bubble.radius * popDistance;
    this.endX = this.lineLength;
    this.endY = this.lineLength;
  }
}

export default PoppingLine;
