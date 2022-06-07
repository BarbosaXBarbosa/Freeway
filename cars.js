
  //Cars Code

let yCars = [40, 96, 150, 210, 270, 318];
let xCars = [600, 600, 600, 600, 600, 600];
let heightCars = 50;
let widthCars = 40;
let speedCars = [5, 7, 3, 2, 9, 4];

function showCars(){
  for ( i = 0; i < carsImgs.length; i ++) {
    image(carsImgs[i], xCars[i], yCars[i], heightCars, widthCars);
  }
}

function moveCars() {
  for ( i = 0; i < carsImgs.length; i ++){
    xCars[i] -= speedCars[i];
  }
}

function back2TheInitialPlace(){
  for ( i = 0; i < carsImgs.length; i ++){
    if (reachedTheEdge(xCars[i])){
      xCars[i] = 600
    }
  }
}

function reachedTheEdge(xCar){
  return xCar < -50;  
}