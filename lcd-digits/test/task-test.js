describe('splitNumber()', function() {
  var input;

  beforeEach(function() {
    input = '3112603';
  });

  it('should split number into digits', function() {

    var output = splitNumber(input);

    var expectObject = ['3', '1', '1', '2', '6', '0', '3'];

    expect(output).toEqual(expectObject);
  });
});
