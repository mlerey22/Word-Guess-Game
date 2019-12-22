
    var wordBank = ["PHYSICS", "QUASAR", "BLACK HOLE", "MATTER", "ENERGY", "QUARK", "QUANTUM", "STAR", "GALAXY"];
    var life = 6;
    var answer;
    var guess;
   

    var randomIndex = Math.floor(Math.random() * wordBank.length);
    var word = wordBank[randomIndex];
    console.log(word);

 
        var guess = document.getElementById("lettersG");
  
        // Next, we give JavaScript a function to execute when onkeyup event fires.
        document.onkeyup = function(event) {
          guess.textContent = event.key;
        };
    
      
    var answer = [];
    for (var i = 0; i< word.length; i++) {
        answer[i] = "_";
       
    var lettersLeft = word.length;
    }

    document.getElementById("word").innerHTML = answer

    /* while (lettersLeft > 0) {
        // game code
        // take guess
        // show guesses left
        // update answer array and letters left
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
              answerArray[j] = guess; remainingLetters--;
            }
   } 
}; */

 
/* var guess = document.getElementById("lettersG");

      // Next, we give JavaScript a function to execute when onkeyup event fires.
      document.onkeyup = function(event) {
        guess.textContent = event.key;
      };*/

     