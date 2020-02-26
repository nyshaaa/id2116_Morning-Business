let bulbOn;
let bulbOff;

let brightness = 0; 

function setup() {
  createCanvas(400, 400);
  bulbOn = loadImage (Images/bulb_on.png");
  bulbOff = loadImage (Images/bulb_off.png");

}

function draw() {
  background(220);
  imageMode(CENTER);
  
  if(brightness ==1){
image(bulbOn,0,0, 300,300);
}else{
  image(bulbOff,0,0, 300,300)
  }
}