var bgimg
var splashimage,playButton,aboutButton
var gameState="wait"

function preload(){
splashimage = loadImage('Flash Beast (3).gif')

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  playButton= createButton('Play');
  playButton.position(width/4,height-height/4)

  aboutButton=createButton('About');
  aboutButton.position(width/4+200,height-height/4)
// playButton.size(100,100)
}

function draw() {
    background(splashimage);
    if(gameState=="wait"){
      background(splashimage);
      playButton.show()
      aboutButton.show()
      }
      
      playButton.mousePressed(()=>{
        gameState="play"
         
      })
    
      if(gameState=="play"){
        background("red")
        playButton.hide()
        aboutButton.hide()
    }
    }