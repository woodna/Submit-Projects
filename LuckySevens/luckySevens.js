/*
Name:Nate Wood
Date Created: 12/3/19
Most Recent Revision: 12/3/19
*/

function clearErrors() {
  if (document.forms["luckySevens"].elements[0]
     .parentElement.className.indexOf("has-") != -1) {

      document.forms["luckySevens"].elements[0]
         .parentElement.className = "form-group";
  }
}

function validateItems() {
  clearErrors();
  var bet = document.forms["luckySevens"]["bet"].value;

  //Check if input bet is a number and above zero
  if (bet == "" || isNaN(bet)) {
    alert("Starting bet must be filled with a number");
    document.forms["luckySevens"]["bet"]
       .parentElement.className = "form-group has-error";
    document.forms["luckySevens"]["bet"].focus();
    return false;
  }
   if (Number(bet) < 0) {
     alert("Starting bet must be above zero");
     document.forms["luckySevens"]["bet"]
        .parentElement.className = "form-group has-error";
     document.forms["luckySevens"]["bet"].focus();
     return false;
   }

   //Setup
   document.getElementById("submitButton").innerText = "Re-play";
   document.getElementById("betOriginal").innerText = "$" + bet;

   var gameMoney = bet;
   var rollsTotal = 0;
   var maxAmount = bet;
   var rollsHighest = 0;

   //Roll Dice
   do {
     die1 = rollDice(6);
     die2 = rollDice(6);
     rollsTotal++;

     //Check if dice roll is 7, edit gamestate
     if (Number(die1) + Number(die2) == 7) {
       gameMoney = Number(gameMoney) + Number(4);
       if (Number(gameMoney) > Number(maxAmount)){
         maxAmount = gameMoney;
         rollsHighest = rollsTotal;
       }
     } else {
       gameMoney--;
     }
   } while (gameMoney >= 1)

   // Display Results
   document.getElementById("resultTable").style.display = "table";
   document.getElementById("resHeading").style.display = "block";
   document.getElementById("rollsTotal").innerText = rollsTotal;
   document.getElementById("maxAmount").innerText = "$" + maxAmount;
   document.getElementById("rollsHighest").innerText = rollsHighest;

   document.forms["luckySevens"]["bet"].focus();
   return false;
}

function rollDice(n) {
  return Math.floor(Math.random() * n) + 1;
}
