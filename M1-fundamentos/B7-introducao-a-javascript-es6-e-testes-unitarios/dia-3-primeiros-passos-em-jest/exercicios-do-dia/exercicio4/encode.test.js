const { encode, decode } = require('./encode');

describe ('Encode e Decode Functions', () => {
  it ('Encode is a function?', () => {
    expect(typeof encode).toBe('function');
  });

  it ('Decode is a function?', () => {
    expect(typeof decode).toBe('function');
  });

  it ('Encode must to convert vogals in numbers correctly', () => {
    expect(encode('a,e,i,o,u')).toBe('1,2,3,4,5');
  });

  it ('Decode must to convert numbers in vogals correctly', () => {
    expect(decode('1,2,3,4,5')).toBe('a,e,i,o,u');
  });

  it ('Testing encode strings then must be convert correctly', () => {
    expect(encode('Bella')).toBe('B2ll1');
  });

  it ('Testing decode strings then must be convert correctly', () => {
    expect(decode('P1r1d23r4')).toBe('Paradeiro');
  });

  it ('Testing encode length strings parameter', () => {
    expect(encode('Heydude')).toHaveLength(7);
  });

  it ('Testing decode length strings parameter', () => {
    expect(decode('B3l1b4ng')).toHaveLength(8);
  });
  
});
