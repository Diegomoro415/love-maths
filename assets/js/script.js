// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type")=== "submit") {
                alert("You Clicked Submit");
            } else {
                let gameType = this.getAttribute("data-type");
                    alert(`You Clicked ${gameType}`);
                
            }
        })
    }
})

/**
 * Teh main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGAme() {
    // creates two random numbers berween 1 and 25
    let number1 = Math.floor(Math.random() * 25) + 1;
    let number2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

} 

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}