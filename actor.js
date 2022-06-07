//Actor
let xActor = 77;
let yActor = 366;
let isColliding = false;
let scoreboard = 0;


function showActor() {
  image(actorImg, xActor, yActor, 30, 30);
}

function moveActor(){
  if(keyIsDown(UP_ARROW)) {
    yActor -=3;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yActor +=3;
  }
}

function verifyCollision(){
  for ( i = 0; i < carsImgs.length; i ++){
    isColliding = collideRectCircle(xCars[i], yCars[i], heightCars, widthCars,
                                   xActor, yActor, 20)
    if (isColliding) {
      haveACollide();
      soundCollision.play();
    }
  }
}

function haveACollide(){
  yActor = 366;
  if(scoreboard >= 1){
    scoreboard --;
  }
}

function showScoreBoard(){
  textSize(29);
  text(scoreboard, width / 5, 29);
}

function scored(){
  if (yActor < 1) {
    scoreboard ++;
    soundScorePoint.play();
    yActor = 366;
  }
}





