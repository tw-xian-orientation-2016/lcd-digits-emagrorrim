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

function joinStrs(lineStrings) {
  var stringLines = [];
  lineStrings.forEach(function(lineString) {
    var stringLine = '';
    for (var i = 0; i < lineString.length; i++) {
      if (i != lineString.length - 1) {
        stringLine += (lineString[i] + ' ');
      } else {
        stringLine += (lineString[i] + '\n');
      }
    }
    stringLines.push(stringLine);
  });
  return stringLines;
}

function show(stringLines) {
  var lcdNumberStr = '';
  stringLines.forEach(function(stringLine) {
    lcdNumberStr += stringLine;
  });
  console.log(lcdNumberStr);
}
