//imgs
let roadImg;
let actorImg;
let car1Img;
let car2Img;
let car3Img;

//sounds
let soundTrack;
let soundCollision;
let soundScorePoint;


function preload(){
  
  //imgs
  roadImg = loadImage('imgs/estrada.png')
  actorImg = loadImage('imgs/ator-1.png')
  car1Img = loadImage('imgs/carro-1.png')
  car2Img = loadImage('imgs/carro-2.png')
  car3Img = loadImage('imgs/carro-3.png')
  carsImgs = [car1Img, car2Img, car3Img,car1Img, car2Img, car3Img];
  
  //sounds
  soundTrack = loadSound("sounds/trilha.mp3");
  soundCollision = loadSound("sounds/colidiu.mp3");
  soundScorePoint = loadSound("sounds/pontos.wav");
}


