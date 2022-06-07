
function setup() {
  createCanvas(500, 400);
  soundTrack.loop();
}

function draw() {
  background(roadImg);
  showCars();
  moveCars();
  back2TheInitialPlace();
  showActor();
  moveActor();
  verifyCollision();
  showScoreBoard();
  scored();
}

