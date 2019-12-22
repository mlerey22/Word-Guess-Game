
    var wordBank = ["PHYSICS", "QUASAR", "MATTER", "ENERGY", "QUARK", "QUANTUM", "STAR", "GALAXY"];
    var life = 10;
    var guess;
    var wordArray;
    var location;
    var wordLength = [];
    var word;
    var discard = [];
   
   
window.onload = function start() {
    if (life = 10) {
    var randomIndex = Math.floor(Math.random() * wordBank.length);
    word = wordBank[randomIndex];
    console.log(word);
    wordArray = word.split("");
    for (var i = wordLength.length; i < wordArray.length; i++) {
        wordLength.push("_");
    }
  };

    
document.getElementById("wordMain").innerHTML = wordLength;


    document.onkeyup = function(event) {
        guess = event.key;
        console.log(guess);
        letterCheck();

    };
    
   
    




function letterCheck() {
    var str = word;
    var low = str.toLowerCase();
    wordArray = low.split("");
   console.log(wordArray);
    let idx = wordArray.indexOf(guess);
    console.log(idx);

if (idx === -1) {
    life--
    document.getElementById("guesses").innerHTML = life;
    discard.push(guess)
    document.getElementById("lettersG").innerHTML = discard;
    
}
else {
    
   wordLength[idx] = guess;
   document.getElementById("wordMain").innerHTML = wordLength;
   
} ;  


};


  
};


/*document.onkeyup = function(event) {
          
    console.log(event.key); 

    var guess = event.key;

    while (lettersLeft > 0) {

        document.onkeyup = function(event) {
          
            console.log(event.key); 
        
            var guess = event.key;
    
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
              answer[j] = guess; 
              lettersLeft--;
            };
        };
    };
};

}; */
