describe('splitNumber()', function() {
  var input;

  beforeEach(function() {
    input = '910';
  });

  it('should split number into digits', function() {

    var output = splitNumber(input);

    var expectResult = ['9', '1', '0'];

    expect(output).toEqual(expectResult);
  });
});

describe('convertToLCD()', function() {
  var input;
  var lcdNumbers;

  beforeEach(function() {
    input = ['9', '1', '0'];
    lcdNumbers = loadLCDNumbers();
  });

  it('should convert str number to lcd number', function() {

    var output = convertToLCD(input, lcdNumbers);

    var expectResult = ['._.|_|..|', '.....|..|', '._.|.||_|'];

    expect(output).toEqual(expectResult);
  });
});
