let n = 5;
let space = '';
let asterisco = '';

for (let j = 0; j < n; j++){
    for (let i = 1; i <= n; i++) {
        if (i < n - j) {
            space += ' ';
        } else {
            asterisco += '*';
        }
}    
    console.log(space + asterisco);
    space = '';
    asterisco = '';
}