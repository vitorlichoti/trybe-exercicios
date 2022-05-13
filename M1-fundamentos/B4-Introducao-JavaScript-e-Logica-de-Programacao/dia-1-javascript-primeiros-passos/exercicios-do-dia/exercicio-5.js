const ang1 = 30;
const ang2 = 60;
const ang3 = 90;

if (ang1 + ang2 + ang3 === 180) {
    console.log(true);
} else if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
    console.log("valor inválido");
} else {
    console.log(false);
}