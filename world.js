class World {
  constructor(cols, rows, size) {
    this.cols = cols;
    this.rows = rows;
    this.size = size;
  }

  height(x, y) {
    // Simple procedural terrain (improved Perlin-like noise)
    return (
      Math.sin(x * 0.1) * 5 +
      Math.cos(y * 0.1) * 5 +
      Math.sin(x * 0.05 + y * 0.05) * 10
    );
  }

  draw(ctx, cameraX, cameraY) {
    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {

        let h = this.height(x, y);

        let color = "green";
        if (h > 8) color = "gray";     // mountains
        if (h < 0) color = "blue";    // water

        ctx.fillStyle = color;
        ctx.fillRect(
          x * this.size - cameraX,
          y * this.size - cameraY,
          this.size,
          this.size
        );
      }
    }
  }
}
