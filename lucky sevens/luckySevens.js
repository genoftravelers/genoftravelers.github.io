
function validate() {
    var giveAbet = document.forms["giveAbet"];                          // forms made in HTML
    var startBets = document.getElementById("startBet");              // get starting bet -> it's a string

    var startBetNum = parseFloat(startBets.value);                      // bet as a float
    startBets.setCustomValidity("");                                 // reseting validation of form

    var RollsinTotal;                                                 // declaring the total of rolls
    var maxRolls = 0;                                                   //declarig the max of rolls
    var max = 0;                                                        
    var MoneyBet = startBetNum;                                         //money bet has to wqual to the starting bet
    var die1;                                                             //declaring both dice here
    var die2;

    if (!giveAbet.checkValidity()) {
        giveAbet.className = "was-validated";
        return false;
    } else if (startBetNum <= 0) {
        giveAbet.className = "was-validated";
        startBets.setCustomValidity("You need to play more money");
        return false;
    } else {
        for (RollsinTotal = 1; MoneyBet > 0; RollsinTotal++) {
            die1 = Math.floor(Math.random() * 6) + 1;               // This shows how to get the die number
            die2 = Math.floor(Math.random() * 6) + 1;
        
            if ((die1 + die2) === 7) {                              // has to be greater than 7
                MoneyBet += 4
                if (MoneyBet > max) {                              // this will keep in check of the max value
                    max = MoneyBet;
                    MaxRolls = RollsinTotal;
                }
            } else {                                                // if dice doesnt total to 7, we lose money
                MoneyBet--;
            }
        }
        giveAbet.reset();										// this will reset the form
        startBets.setCustomValidity("");                             // this will reset validation form
        giveAbet.className = "needs-validation";
    }
    document.getElementById("showStartBet").innerText = startBetNum;   // This will have the player see the result
    document.getElementById("showAllRolls").innerText = RollsinTotal;
    document.getElementById("showHighestAmountWon").innerText = max;
    document.getElementById("showRollCountAtHightestAmountWon").innerText = MaxRolls;

    results.style.display = "block";                                // This shows the results
    return false;
}