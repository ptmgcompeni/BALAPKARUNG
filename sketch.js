let player1,player2;
let sfxLoncat

function preload(){
  soundFormats('mp3')
  sfxLoncat = loadSound('loncat.mp3')
}
function setup() {
  createCanvas(600, 400);
  
  player1 = new Player('red',100)
  player2 = new Player('blue',300)
}

function draw() {
  background(220, 200, 100);
    
    player1.tampilkan()
    player2.tampilkan()
  
    player1.finish()
    player2.finish()
  
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    player1.maju()
    sfxLoncat.play()
  }
  
  else if(keyCode === RIGHT_ARROW){
    player2.maju()
    sfxLoncat.play()
  }
}
