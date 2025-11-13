import { Toolbox } from "./toolbox.js";
import { card } from "./card.js";
let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");
let toolbox = new Toolbox()

let testCard = new card(pencil, canvas, toolbox);
testCard.fillStyle = toolbox.getRandomColor()
testCard.draw();


// let letters = ["a", "b", "c"];

// console.log(toolbox.getRandomColor());

// pencil.fillStyle = toolbox.getRandomColor()
// pencil.fillRect(50, 50, 100, 100);

// for(let i=0; i<4; i++){
//     console.log(toolbox.getRandomItem(letters))
// }

// let shuffled = toolbox.shuffleArray(letters)
// console.log(shuffled)

function detectClicks(){
    console.log("cluh")
}

addEventListener("click", detectClicks);
// addEventListener("barr", );  should detect where click so specific card activates

