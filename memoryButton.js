import { Toolbox } from "./toolbox.js";
export class MemoryButton {
    x = 50;
    y = 50;
    color;

    width = 100;
    height = 100;

    canvas;
    pencil;

    isFaceUp = false;

    toolbox = new Toolbox();

    constructor(canvas, pencil, x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;
        this.pencil = pencil;
        this.canvas = canvas;
        canvas.addEventListener("click", (e) => this.onClick(e))

    }

    draw(){
        if(this.isFaceUp) {
            this.pencil.fillStyle = this.color;
            this.pencil.fillRect(this.x, this.y, this.width, this.height)
        } else {
            this.pencil.strokeStyle = "gray";
            this.pencil.lineWidth = 10;
            this.pencil.strokeRect(this.x, this.y, this.width, this.height)
        }
    }

    onClick(event){
        let clickX = event.offsetX;
        let clickY = event.offsetY;

        // console.log(clickX +" / "+clickY);

        let isClickInButton = this.toolbox.isWithinRect(
            clickX, 
            clickY, 
            this.x, 
            this.y, 
            this.width, 
            this.height
        )
        
        if(isClickInButton){
            this.isFaceUp = !this.isFaceUp;
        }
    }
}