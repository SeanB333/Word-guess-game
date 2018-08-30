
var pcPossible = ["math", "science", "knowledge", "wisdom", "understanding"];
var displayArea = [];
var randomWord = pcPossible[Math.floor(Math.random() * pcPossible.length)];
var displayRandom = document.getElementById("displayRandom");
var displayWord;
var guessCount = 10;

function resetGame(){
    
    startGame();
}

function startGame() {
    
    displayArea[randomWord] = randomWord;
    
    for (i=0;i<randomWord.length;i++){
        displayArea[i] = "_";
    }
    displayWord = displayArea.join(" ");
    document.getElementById("displayRandom").innerHTML = displayWord;
   
    document.onkeypress = function myGuess(){
        var myLetter = event.key;
        for (j=0;j<randomWord.length;j++){
            if (randomWord[j] === myLetter){
                displayArea[j] = myLetter;
            }
            else {
                guessCount - 1;
            }
            if(guessCount < 1){
              
                resetGame()  
                
            }
        }
        
        guessCount--;
        document.getElementById("displayRandom").innerHTML = displayArea.join(" ");
        document.getElementById("myGuesses").innerHTML += event.key + " ";
        document.getElementById("count").innerHTML = guessCount;
    }

}

startGame();
console.log(displayArea);
console.log(randomWord);


