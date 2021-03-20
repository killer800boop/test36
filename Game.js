class Game{
    constructor(){

    }

    getState(){
    var gameStateref = database.ref('gameState')
    gameStateref.on("value",function(data){
    gameState = data.val()
    })
    }

    updateState(state){
    database.ref('/').update({
    gameState:state
    })       
    }

    start(){
    if (gameState === 0) {
    form = new Form()  
    form.display()
    runner = new Runner()   
    runner.getCount()
      
    }
    }

    play(){
    form.hide()
    if(message === 0){
    fill("black")
    textSize(20)        
    text("Game Starts",400,150)
    text("Press Space to Start",400,200)  
    message = 1
    }
    

    if (keyDown ("space") && message === 1) {
    console.log("message")
    p1 = createSprite(400,700,10,10)  
    drawSprites()              
    }

    }
}