import { Toolbox } from "./toolbox.js";
// import { card } from "./card.js";
let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");
let toolbox = new Toolbox()

// let testCard = new card(pencil, canvas, toolbox);
// testCard.fillStyle = toolbox.getRandomColor()
// testCard.draw();

let color1 = toolbox.getRandomColor();
let card1a = new MemoryButton(canvas, pencil, 50, 50, color1)



function detectClicks(){
    console.log("cluh")
}

addEventListener("click", detectClicks);
// addEventListener("barr", );  should detect where click so specific card activates

