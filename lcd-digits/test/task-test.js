describe('splitNumber()', function() {
  var inputs;

  beforeEach(function() {
    inputs = '3112603';
  });

  it('should split number into digits', function() {

    var outputs = [];
    for (var i = 0; i < inputs.length; i++) {
      outputs.push(splitNumber(inputs[i]));
    }

    var expectObject = ['3', '1', '1', '2', '6', '0', '3'];

    expect(outputs).toEqual(expectObject);
  });
});
