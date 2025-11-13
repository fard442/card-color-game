export class card {
    
    pencil;
    canvas;
    toolbox;
    cardBack;

    constructor(pencil, canvas, toolbox){
        this.canvas = canvas;
        this.pencil = pencil;
        this.toolbox = toolbox
    }
    
    draw(){
        this.pencil.fillStyle = this.toolbox.getRandomColor()
        this.pencil.fillRect(50, 50, 100, 100)
    }
    
    flipCard(){
        console.log("would flip")
    }

    // cardBack = this.pencil.fillRect(50, 50, 100, 100)
}