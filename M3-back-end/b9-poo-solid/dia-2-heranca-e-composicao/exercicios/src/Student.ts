import Person from "./Person";

export default class Student extends Person {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);

    this._enrollment = this.generateEnrollment();
  }
  
  get enrollment() {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error("A matricula deve possuir no minimo 16 caracteres");
    
    this._enrollment = value;
  }

  get examsGrades() {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) throw new Error("A pessoa estudante só pode possuir 4 notas de provas");
    this._examsGrades = value;
  }

  get worksGrades() {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) throw new Error("A pessoa estudante só pode possuir 2 notas de trabalhos");
    this._examsGrades = value;
  }

  generateEnrollment():string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `STU${randomStr}`;
  }

  sumGrades(): number {
    const sum = this._examsGrades;
    return sum.reduce((a, b) => a + b);
  }

  sumAverageGrade(): number {
    const average = this.sumGrades() / this._examsGrades.length;
    return average;
  }
}