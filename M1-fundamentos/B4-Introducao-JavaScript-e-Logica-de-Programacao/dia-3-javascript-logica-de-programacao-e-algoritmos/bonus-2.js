let n = 5;
let asterisco = '';

for (let i = 0; i < n; i++) {    
    for (let j = 0; j <= i; j++){
        asterisco += '*';
    }
    console.log('' + asterisco);
    asterisco = '';
}