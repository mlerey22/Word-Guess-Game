
    var wordBank = ["PHYSICS", "QUASAR", "BLACK HOLE", "MATTER", "ENERGY", "QUARK", "QUANTUM", "STAR", "GALAXY"];
    var life = 10;
    var guess;
    var wordArray;
    var location;
    var wordLength;
    var word;
    var discard = [];

   
window.onload = function start() {
    if (life = 10) {
    var randomIndex = Math.floor(Math.random() * wordBank.length);
    word = wordBank[randomIndex];
    console.log(word);

    wordLength = "_".repeat(word.length).split("");
  };

    
document.getElementById("wordMain").innerHTML = wordLength;
for (var i = 65; i < 91; i++) {

    document.onkeyup = function(event) {
        guess = event.key;
        console.log(guess);
        letterCheck();

    };
    
    console.log("thisis: " + wordLength)
};



function letterCheck() {
    console.log("2nd round: " + word)
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
while (idx != -1) {
   location.push(idx);
    idx = arraylow.indexOf(guess, idx + 1);
    

 for (let i = 0; i < location.length; i++) {
            wordLength[location[i]] = wordArray[location[i]];
            document.getElementById("wordMain").innerHTML = guess;};
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
