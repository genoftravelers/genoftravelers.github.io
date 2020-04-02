// for (var i = 0; i < 100; i++) {
//     console.log(Math.random() * 6);
//   }

// for (var i = 0; i < 100; i++) {
//     console.log(Math.floor(Math.random() * 6)+ 1);
//   }


var numSides = prompt("How many sides does the die have?");
var rollDice = prompt("how many number of dice are you using?")

function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
  }
   
  for (var i = 0; i < 100; i++) {
    console.log(rollDice(numSides));
  }