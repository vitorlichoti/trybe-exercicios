const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareResults = (answers, student) => {
  if (student === answers) {
    return 1;
  }
  if (student === 'N.A') {
    return 0;
  }
  if (student !== answers) {
    return -0.5;
  }
}

const totalGoals = (answers, student, callback) => {
  let goals = 0;
  for (let i = 0; i < answers.length; i += 1) {
    goals += callback(answers[i], student[i]);
  }
  return goals;
}

console.log(totalGoals(RIGHT_ANSWERS, STUDENT_ANSWERS, compareResults));
