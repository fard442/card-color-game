import { Toolbox } from "./toolbox";

export class MemoryButton {
    x=50;
    y=50;
    color;

    width = 100;
    height = 100;


    canvas;
    pencil;

    isFaceUp=false;

    toolbox = new Toolbox();

    constructor(canvas, pencil, x, y, color){
        this.x=x;
        this.y=y;

    }

    draw(){
        if(this.isFaceUp) {
            this.pencil.fillStle = this.color;
            this.pencil
        } else {
            this.pencil.strokeStyle = "gray";
            this.pencil
        }
    }

    onClick(event){
        let clickX=event.offsetX;
        let clickY=event.offsetY;

        console.log()
    }
}