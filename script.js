let colors = [];
let difficulty = 6;
let square = document.querySelectorAll(".square");
randomColors();
let selectedColor = colors[Math.floor(Math.random() * difficulty)];
let message = document.querySelector("#message");
let head = document.querySelector("h1");
document.querySelector("#colorname").textContent = selectedColor;
let num = (75 - difficulty * 2);
let squareSides = "";
let reset = document.querySelector("#reset");
let easy = document.querySelector("#easy");
let medium = document.querySelector("#medium");
let hard = document.querySelector("#hard");
let impossible = document.querySelector("#impossible");
//size reset function
function sizeReset() {
    if (num >= 51) { squareSides = 23 + "%"; }
    else if (num >= 30) { squareSides = 19 + "%"; }
    else if (num >= 21) { squareSides = 15 + "%"; }
    else if (num >= 60) { squareSides = 40 + "%"; }
    else {
        squareSides = num + "%";
    }
}
sizeReset();
function squareLoop() {
    for (let i = 0; i < square.length; i++) {
        square[i].style.width = squareSides;
        square[i].style.paddingBottom = squareSides;
        //select colors
        if (colors[i]){
            square[i].style.display = "inline";
            square[i].style.backgroundColor = colors[i];
        }else{square[i].style.display = "none";}
        // square[i].style.backgroundColor = "rgb(40, 40, 40)";
        
        //event listner
        square[i].addEventListener("click", function () {
            if (this.style.backgroundColor === selectedColor) {
                message.textContent = "Correct!!!";
                head.style.backgroundColor = square[i].style.backgroundColor;
                for (let j = 0; j < difficulty; j++) {
                    square[j].style.backgroundColor = square[i].style.backgroundColor;
                }
            } else {
                this.style.backgroundColor = "rgb(40, 40, 40)";
                message.textContent = "*Try Again*"
            }
        })
    }
}
squareLoop();
function randomColors() {

    for (let i = 0; i < difficulty; i++) {
        val1 = Math.floor(Math.random() * 256);
        val2 = Math.floor(Math.random() * 256);
        val3 = Math.floor(Math.random() * 256);
        colors.push("rgb(" + val1 + ", " + val2 + ", " + val3 + ")")
    }
}

function resetgame() {
    colors = [];
    randomColors();
    selectedColor = colors[Math.floor(Math.random() * difficulty)];
    document.querySelector("#colorname").textContent = selectedColor;
    squareLoop();
    head.style.backgroundColor = "rgb(13, 132, 168)";
    message.textContent = "";

}
//reset event listener
reset.addEventListener("click", resetgame)
//level event listener
easy.addEventListener("click", function () {

    difficulty = 6;
    num = (75 - difficulty * 2);
    sizeReset();
    resetgame();
    this.classList.add("selected");
    medium.classList.remove("selected");
    hard.classList.remove("selected");
    impossible.classList.remove("selected");

})

medium.addEventListener("click", function () {
    difficulty = 12;
    num = (75 - difficulty * 2);
    
    sizeReset();
    resetgame();
    this.classList.add("selected");
    easy.classList.remove("selected");
    hard.classList.remove("selected");
    impossible.classList.remove("selected");
})
hard.addEventListener("click", function () {
    difficulty = 20;
    num = (75 - difficulty * 2);
    
    sizeReset();
    resetgame();
    this.classList.add("selected");
    medium.classList.remove("selected");
    easy.classList.remove("selected");
    impossible.classList.remove("selected");
})
impossible.addEventListener("click", function () {
    difficulty = 30;
    num = (75 - difficulty * 2);
    
    sizeReset();
    resetgame();
    this.classList.add("selected");
    medium.classList.remove("selected");
    hard.classList.remove("selected");
    easy.classList.remove("selected");
})
//selected
easy.classList.add("selected");