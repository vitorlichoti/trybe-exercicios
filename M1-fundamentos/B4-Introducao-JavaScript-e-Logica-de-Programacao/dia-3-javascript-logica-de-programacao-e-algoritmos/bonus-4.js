let n = 5;

for(var i = 0; i < n; ++i){
    for(var k = i; k < n; ++k){
        document.write(" ");
    }
    for(var j = 0; j < i*2-1; ++j){
        document.write("*");
    }
    document.write("<br/>")
}