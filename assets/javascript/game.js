
    var wordBank = ["PHYSICS", "QUASAR", "MATTER", "ENERGY", "QUARK", "QUANTUM", "STAR", "GALAXY"];
    var life = 10;
    var guess;
    var wordArray;
    var location;
    var wordLength = [];
    var word;
    var discard = [];
    var alpha = "abcdefghijklmnopqrstuvwxyz"
   
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
var main = wordLength.join(" ")
    
document.getElementById("wordMain").innerHTML = main;

 alphaArray = alpha.split("");
 

    document.onkeyup = function(event) {
        
        guess = event.key;
        console.log(guess);

        let ind = alphaArray.indexOf(guess);

        if (ind != -1) {
            letterCheck();
        }
        
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
while (idx != -1) {
    
   wordLength[idx] = guess;
   
  
   idx = wordArray.indexOf(guess, idx + 1);
   var main = wordLength.join(" ")
    
document.getElementById("wordMain").innerHTML = main;

} ;  


};


  
};


