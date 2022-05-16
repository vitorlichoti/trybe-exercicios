let int = 50;
let result = [];

for (let i = int; i >= 2; i--){
    if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0){
        result.push(i);
    }
}

console.log(result[0]);