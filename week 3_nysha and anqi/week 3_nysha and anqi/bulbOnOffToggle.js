let bulbOn;
let bulbOff;

let brightness = 0;

function setup() {
  createCanvas(400, 400);
  bulbOn =loadImage("images/bulb_on.png");
  bulbOff =loadImage("images/bulb_off.png");
}

function draw() {
  background(220);
  //image(bulbOn, 0, 0);
  
  imageMode(CENTER);
  
  if(brightness == 1)
  { 
  
    image(bulbOn, width/2, height/2, 300, 300)
    brightness = !brightness; //challenge on off
                     }
  else { 
  image(bulbOff, width/2, height/2, 300, 300);
   
  }
  
} 

function on (){
brightness=1;
print("the bulb is on~!!!!");  
}

function off (){
brightness=0;
  print("the bulb is off!!!");
}

function mousePressed(){
  on();
}

function mouseReleased(){
  off()

}


















