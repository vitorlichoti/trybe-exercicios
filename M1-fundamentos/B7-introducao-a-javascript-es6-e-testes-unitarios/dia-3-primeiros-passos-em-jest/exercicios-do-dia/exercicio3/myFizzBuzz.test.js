const myFizzBuzz = require('./myFizzBuzz');

describe ('Exercicio 3 - teste', () => {
  it ('when pass a number divisible for 3 and 5 returns "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it ('when pass a number only divisible for 3  returns "fizz"', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it ('when pass a number only divisible for 5 returns "buzz"', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });

  it ('when pass a number not divisible for 3 o 5 returns number of parameter', () => {
    expect(myFizzBuzz(13)).toBe(13);
  });

  it ('when pass a not number returns false', () => {
    expect(myFizzBuzz('5')).toBe(false);
  });
});
