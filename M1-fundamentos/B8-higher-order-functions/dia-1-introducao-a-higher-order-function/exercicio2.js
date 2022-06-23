// const prizeDraw = (num) => {
//   let randomNum = Math.floor(Math.random() * 6);
//   if (num === randomNum) { return `Parabéns você ganhou`};
//   return `Tente novamente`; 
// }

// console.log(prizeDraw(2));

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));
