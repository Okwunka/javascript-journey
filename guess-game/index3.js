const luckyNumber = 76;
let chances = 5;

while (chances > 0){
    let guess = submitGuess();

    let result = checkGuess(guess);

    if (result == "correct"){
        alert("You win!");
        break;
    }
    else if (result == "high"){
        alert("Too high");
    }
    else{
        alert("Too low")
    }


    chances = chances - 1;
}

function submitGuess(){
    let guess= prompt("Enter a number between 1 and 100");

    while (!isNumber(guess)){
        guess= prompt("Enter a numbre from 1 to 100");
    }
    return guess
    
}

function checkGuess(guess){
    if (guess == luckyNumber){
        return "correct";
    }
    else if (guess > luckyNumber){
        return "high";
    }
    else{
        return "low";
    }

}
function isNumber(guess){
    return !isNaN(guess);
}