class Sprite {
  constructor(image, sheetHeight, sheetWidth, rows, frameCount) {
    this.image = image;
    this.height = sheetHeight / rows;
    this.width = sheetWidth / frameCount;
    this.frameCount = frameCount;
    this.currentFrame = 0;
    this.isMoveLeft = false;
    this.isMove = false;
  }

  srcX() {
    return this.currentFrame * this.width;
  }

  srcY() {
    return this.isMoveLeft ? this.height : 0;
  }

  updateFrame() {
    this.currentFrame = (this.currentFrame + 1) % this.frameCount;
  }
}

export default Sprite;
