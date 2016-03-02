describe('splitNumber()', function() {
  var input;

  beforeEach(function() {
    input = '910';
  });

  it('should split number into digits', function() {

    var output = splitNumber(input);

    var expect = ['9', '1', '0'];

    expect(output).toEqual(expect);
  });
});

describe('convertToLCD()', function() {
  var input;

  beforeEach(function() {
    input = ['9', '1', '0'];
  });

  it('should convert str number to lcd number', function() {

    var output = convertToLCD(input);

    var expect = ['._.|_|..|', '.....|..|', '._.|.||_|'];

    expect(output).toEqual(expect);
  });
});
