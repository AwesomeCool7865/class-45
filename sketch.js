var bg;
var harry, harryIMG, voldy, voldyIMG;
var hFLASH, vFLASH, flash1IMG, flash2IMG; 
var die, whoosh1, whoosh2;
var harryHealth= 100;
var voldyHealth= 100;
var hDisarm, hShield, hStun, hHealing, hBurn;
var vDisarm, vStun, vKill;

function preload(){
  bg = loadImage("Background.jpg");
  harryIMG= loadImage("ClipartKey_77309.png")
  voldyIMG= loadImage("ClipartKey_2539150.png")
  flash1IMG= loadImage("Harry Flash.png");
  flash2IMG= loadImage("Voldemort FLash.png")
}

function setup() {
  createCanvas(1400, 650);
  harry=createSprite(1250, 500, 50, 50);
  harry.addImage(harryIMG)
  harry.scale= 0.15

  voldy=createSprite(100, 500, 50, 50);
  voldy.addImage(voldyIMG)
  voldy.scale= 0.30

  hFLASH= createSprite(1030,550,50,50);
  hFLASH.addImage(flash1IMG);
  hFLASH.scale= 2;
  hFLASH.visible= false;

  vFLASH= createSprite(280,500,50,50);
  vFLASH.addImage(flash2IMG);
  vFLASH.scale= 2;
  vFLASH.visible= false;

  hDisarm= createButton("Expelliarmus");
  hStun=  createButton("Stupefy");
  hShield=createButton("Protego");
  hHealing= createButton("Healing Potion");
  hBurn= createButton("Hurt Potion");
  hDisarm.position(1220, 100)
  hStun.position(1220, 130)
  hShield.position(1220, 160)
  hHealing.position(1220, 190)
  hBurn.position(1220, 220)
  hDisarm.hide()
  hStun.hide()
  hShield.hide()
  hHealing.hide()
  hBurn.hide()

}

function draw() {
  background(bg); 
  drawSprites();
  textSize(24)
  fill("white")
  textFont("Courier New")
  text("Harry's Health: "+ harryHealth, 1100, 50);
  text("Voldemort's Health: "+ voldyHealth, 50, 50);
  text();
}