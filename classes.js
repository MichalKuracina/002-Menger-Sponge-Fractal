class Box {
  constructor(x, y, z, size) {
    this.pos = createVector(x, y, z);
    this.size = size;
    this.color = color(random(255), random(255), random(255));
  }

  show() {
    push();
    strokeWeight(0.2);
    fill(this.color);
    translate(this.pos.x, this.pos.y, this.pos.z);
    box(this.size);
    pop();
  }

  generate() {
    let result = [];
    let newSize = this.size / 3;

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          if (abs(x) + abs(y) + abs(z) > 1) {
            result.push(
              new Box(
                this.pos.x + x * newSize,
                this.pos.y + y * newSize,
                this.pos.z + z * newSize,
                newSize,
                this.color
              )
            );
          }
        }
      }
    }
    return result;
  }
}
