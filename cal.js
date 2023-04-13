var readline = require('readline-sync');

var num1 = readline.question("Enter a number: ");
var num2 = readline.question("Enter another number: ");
var op = readline.question("Enter an operator: ");

var Calculation = function(num1, num2, op) {
  this.x = parseInt(num1);
  this.y = parseInt(num2);
  this.op = op;

  this.result = function() {
    var x = this.x;
    var y = this.y;
    var op = this.op;

    if (op === "+") {
      var result = x + y;
    } else if (op === "-") {
      var result = x - y;
    } else if (op === "/") {
      var result = x / y;
    } else if (op === "*") {
      var result = x * y;
    } else if (op === "%") {
      var result = x % y;
    } else {
      var result = "Error!"
    }

    console.log("Result: " + result);
  };
}

var calc = new Calculation(num1, num2, op);
calc.result();



