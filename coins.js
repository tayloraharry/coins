var dollarAmt = prompt("How much money is in your wallet?");
dollarAmt = parseFloat(dollarAmt);

var quarter = 25;
var dime = 10;
var nickel = 5;
var penny = 1;
var numOfCoins = 0;

function coinCounter (dollarAmt) {
    var coinPurse = {};

    dollarAmt = dollarAmt*100;

  while (dollarAmt >= quarter) {
    dollarAmt -= quarter;
    numOfCoins++;
  }
  coinPurse.quarters = numOfCoins;
  numOfCoins = 0;


  while (dollarAmt >= dime) {
    dollarAmt -= dime;
    numOfCoins++;
  }
  coinPurse.dimes = numOfCoins;
  numOfCoins = 0;


  while (dollarAmt >= nickel) {
    dollarAmt -= nickel;
    numOfCoins++;
  }
  coinPurse.nickels = numOfCoins;
  numOfCoins = 0;


  while (dollarAmt >= penny) {
    dollarAmt -= penny;
    numOfCoins++;
  }
  coinPurse.pennies = numOfCoins;
  numOfCoins = 0;

  return coinPurse;
}
console.log(coinCounter(dollarAmt));