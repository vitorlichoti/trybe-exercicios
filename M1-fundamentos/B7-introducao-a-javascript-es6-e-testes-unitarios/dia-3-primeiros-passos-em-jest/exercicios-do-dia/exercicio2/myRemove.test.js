const myRemove = require('./myRemove');

describe('Exercicio 2 - teste', () => {
  it ('verify if myRemove([1, 2, 3, 4], 3) remove a expected item of array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it ('verify if myRemove([1, 2, 3, 4], 3) not returns the array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it ('verify if myRemove([1, 2, 3, 4], 5) dont remove any item of array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
