var dollarAmt = prompt("How much money is in your wallet?");
dollarAmt = parseFloat(dollarAmt);

var quarter = 25;
var dime = 10;
var nickel = 5;
var penny = 1;
var numOfCoins = 0;

function coinCounter (dollarAmt) {
    var coinPurse = {
      Quarter: 0,
      Dime: 0,
      Nickel: 0,
      Penny: 0
    };
    var quarter = 25;
    var dime = 10;
    var nickel = 5;
    var penny = 1;
    var numOfCoins = 0;

    dollarAmt = dollarAmt*100;

    coinPurse.Quarter = Math.floor(dollarAmt/quarter);
    dollarAmt = dollarAmt - (coinPurse.Quarter * quarter);

    coinPurse.Dime = Math.floor(dollarAmt/dime);
    dollarAmt = dollarAmt - (coinPurse.Dime * dime);

    coinPurse.Nickel = Math.floor(dollarAmt/nickel);
    dollarAmt = dollarAmt - (coinPurse.Nickel * nickel);

    coinPurse.Penny = Math.floor(dollarAmt/penny);
    dollarAmt = dollarAmt - (coinPurse.Penny * penny);


  return coinPurse;
}
console.log(coinCounter(dollarAmt));