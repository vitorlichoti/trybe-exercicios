const sum = require('./sum');

describe('Exercicio 1 - teste', () => {
  it ('Verify if sum(4, 5) returns 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it ('Verify if sum(0, 0) returns 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it ('Verify if sum(4, "5") throw an error when a not number parameter is passed', () => {
    expect(() => sum(4, '5')).toThrow(Error);
  });

  it ('Verify if error message is "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrow(Error('parameters must be numbers'));
  });
});
