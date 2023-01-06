
var waitbg,bg;
var gamestate="wait"

function preload(){
waitbg=loadImage("Untitled design.gif")
}

function setup(){
    createCanvas(windowWidth,windowHeight)
    // imageMode(CENTER)
    // bg = new BG(waitbg,0)
    playbutton=createImg("b1.png")
    playbutton.position(width/4,height-200) 
    playbutton.size(200,200)

    backbutton=createImg("b1.png")
    backbutton.position(width/3,height-200) 
    backbutton.size(200,200)
    backbutton.hide()

}

function draw(){

    // bg.show()
    if(gamestate==="wait"){
        background(waitbg)
        playbutton.show()
        backbutton.hide()
        
    }

    if(playbutton.mousePressed(()=>{
        gamestate="selectweapon"
    })){}

    if(gamestate==="selectweapon"){
        background(0)
        playbutton.hide()
        backbutton.show()
    }

    if(backbutton.mousePressed(()=>{
        gamestate="wait"
    })){   
    }

}