function splitNumber(number) {
  return number.split('');
}

function convertToLCD(digits, lcdNumbers) {
  var lcdShownNumbers = [];
  digits.forEach(function(digit) {
    var lcdNumber = lcdNumbers[parseInt(digit)];
    lcdShownNumbers.push(lcdNumber);
  });
  return lcdShownNumbers;
}
