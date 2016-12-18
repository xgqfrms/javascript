// 07   IIFE & let & hoisting

for (var i = 1; i <= 3; i++) {
    setTimeout(function(){
        console.log(i);
    }, 0);
}
// 3, 3, 3

for (let i = 1; i <= 3; i++) {
    setTimeout(function(){
        console.log(i);
    }, 0);
}
// 1, 2, 3

for (var i = 1; i <= 3; i++) {
    setTimeout(function(){
        console.log(i);
    }(), 0);
}
// 1, 2, 3

// 08   



// 09   


// 10   



