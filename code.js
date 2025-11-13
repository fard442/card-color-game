import { Toolbox } from "./toolbox.js";
import { MemoryButton } from "./memoryButton.js";
// import { card } from "./card.js";
let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");
let toolbox = new Toolbox()

// let testCard = new card(pencil, canvas, toolbox);
// testCard.fillStyle = toolbox.getRandomColor()
// testCard.draw();


//row 1
let color1 = toolbox.getRandomColor();
let card1a = new MemoryButton(canvas, pencil, 50, 50, color1);
let card1b = new MemoryButton(canvas, pencil, 175, 50, color1);

//row 2
let color2 = toolbox.getRandomColor();
let card2a = new MemoryButton(canvas, pencil, 300, 50, color2);
let card2b = new MemoryButton(canvas, pencil, 425, 50, color2);

function gameLoop(){
    pencil.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    card1a.draw();
    card1b.draw();

    card2a.draw();
    card2b.draw();
}
setInterval(gameLoop, 50)


function detectClicks(){
    console.log("cluh")
}

addEventListener("click", detectClicks);
// addEventListener("barr", );  should detect where click so specific card activates

