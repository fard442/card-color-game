import { Toolbox } from "./toolbox.js";
import { MemoryButton } from "./memoryButton.js";
// import { card } from "./card.js";
let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");
let toolbox = new Toolbox()

// let testCard = new card(pencil, canvas, toolbox);
// testCard.fillStyle = toolbox.getRandomColor()
// testCard.draw();

let color1 = toolbox.getRandomColor();
let card1a = new MemoryButton(canvas, pencil, 50, 50, color1);
let card1b = new MemoryButton(canvas, pencil, 200, 50, color1);

function gameLoop(){
    pencil.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    card1a.draw();
    card1b.draw();
}
setInterval(gameLoop, 50)


function detectClicks(){
    console.log("cluh")
}

addEventListener("click", detectClicks);
// addEventListener("barr", );  should detect where click so specific card activates

