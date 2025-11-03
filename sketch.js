let boxes = [];
let iteration = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
  boxes.push(new Box(0, 0, 0, 150));
  camera(-250, -150, 200);
}

function draw() {
  background(132, 194, 157);
  orbitControl();

  if (iteration < 2) {
    let newBoxes = [];
    boxes.forEach((b) => {
      newBoxes = newBoxes.concat(b.generate());
    });
    boxes = [];
    boxes = boxes.concat(newBoxes);

    iteration++;
  }

  boxes.forEach((b) => {
    b.show();
  });
}
