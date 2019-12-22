
    var wordBank = ["PHYSICS", "QUASAR", "MATTER", "ENERGY", "QUARK", "QUANTUM", "STAR", "GALAXY", "BEAKER", "EQUATION", "LAB", "CHEMICAL", "ELEMENT", "PLANET", "CHEMISTRY", "MATHEMATICS", "ATOMS", "PARTICLE", "REACTION"];
    var life = 10;
    var guess;
    var wordArray;
    var location;
    var wordLength = [];
    var word;
    var discard = [];
    var alpha = "abcdefghijklmnopqrstuvwxyz"

  
window.onload = function start() {
    
    var randomIndex = Math.floor(Math.random() * wordBank.length);
    word = wordBank[randomIndex];
    console.log(word);
    wordArray = word.split("");
    for (var i = wordLength.length; i < wordArray.length; i++) {
        wordLength.push("_");
        var main = wordLength.join(" ")
    
document.getElementById("wordMain").innerHTML = main;
    }






 var alphaArray = alpha.split("");
 

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
    let idz = wordLength.indexOf(guess);
    console.log("idz is " + idz);
    let idy = discard.indexOf(guess);
    console.log("idy is " + idy);

if (idx === -1 && idz === -1 && idy === -1) {
    life--
    document.getElementById("guesses").innerHTML = life;
    if (life == 0) {
        loss();
    }
    discard.push(guess)
    document.getElementById("lettersG").innerHTML = discard;
    
}
while (idx != -1) {
    
   wordLength[idx] = guess;
   
  
   idx = wordArray.indexOf(guess, idx + 1);
   var main = wordLength.join(" ")
    
document.getElementById("wordMain").innerHTML = main;

}   



var wincheck = word.toLowerCase();

console.log("wc" + wincheck);
console.log("wc2 " + wordLength);

if (wincheck === wordLength.join("")) {
    win()
}

if (life === 0) {
    loss()
}

function win() {
    document.getElementById("one").style.display = "none";
    
    document.getElementById("two").style.display = "block";
  
   
    
}


function loss() {
    document.getElementById("one").style.display = "none";
    
    document.getElementById("three").style.display = "block";

}

  
};};
function restart() {
    window.location.reload();
   
};
   

