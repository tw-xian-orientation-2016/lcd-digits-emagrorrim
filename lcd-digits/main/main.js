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

function splitInLine(lcdShownNumbers) {
  var firstLineStrings = [];
  var secondLineStrings = [];
  var thirdLineStrings = []
  lcdShownNumbers.forEach(function(lcdShownNumber) {
     firstLineStrings.push(lcdShownNumber.substr(0, 3));
     secondLineStrings.push(lcdShownNumber.substr(3, 3));
     thirdLineStrings.push(lcdShownNumber.substr(6, 3));
  });
  return [firstLineStrings, secondLineStrings, thirdLineStrings];
}
