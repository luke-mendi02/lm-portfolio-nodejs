var dice = {
    roll: function () {
      var randomNum = Math.floor(Math.random() * 7);
      return randomNum;
    }
  }
  function printNumber(number) {
    var numSpot = document.getElementById('numSpot');
    numSpot.innerHTML = number;
  }
 
  var button = document.getElementById("button");
  button.onclick = function rollDice() {
    var result = dice.roll();
    printNumber(result);
  };
  button.onload = function rollDice() {
    var result = dice.roll();
    printNumber(result);
  }

