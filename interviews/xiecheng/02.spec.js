/* var scope & hoisting */

for (var i = 1; i <= 3; i++) {
    console.log("local i = " + i);
    setTimeout(function(){
        console.log("function i = " + i);
    }, 0);
}
console.log("\nglobal i = " + i);

/* equal to */

var i;
for (i = 1; i <= 3; i++) {
    console.log("local i = " + i);
    setTimeout(function(){
        console.log("function i = " + i);
    }, 0);
}
console.log("\nglobal i = " + i);


/* IIFE */
var i;
for (i = 1; i <= 3; i++) {
    console.log("local i = " + i);
    setTimeout(function(){
        console.log("function i = " + i);
    }(), 0);
}
console.log("\nglobal i = " + i);

/* let */
for (let i = 1; i <= 3; i++) {
    console.log("local i = " + i);
    setTimeout(function(){
        console.log("function i = " + i);
    }(), 0);
}
console.log("\nglobal i = " + i);
