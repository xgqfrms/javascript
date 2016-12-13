// console.log(`browser-sync start --server --files "./*.html & ./*.js"`);
let p = document.getElementById('print');
p.onclick = (() => {
    try{
        print();
    }catch() {
        alert("Your browser does not support `print()` method.");
    }
})();

(() => {
    if(false){
        alert("Your browser support `print()` method.");
    }else{
        alert("Your browser does not support `print()` method.");
    }
})();

(() => {
    let p = document.getElementById('print');
    let b = false;
    console.log(`b === ${b}!`);
    const print = `print()`;
    if(window.print){
        b = true;
        console.log(`b === ${b}!`);
    }
    let x = () => {
        if(b){
            console.log(`Your browser support ${print} method.`);
        }else{
            alert(`Your browser does not support ${print} method.`);
            console.log(`Your browser does not support ${print} method.`);
        };
    }
    // p.onclick = x();
    x();
})();

(() => {
    let p = document.getElementById('print');
    let b = false;
    console.log(`b === ${b}!`);
    const print = `print()`;
    if(window.print){
        b = true;
        console.log(`b === ${b}!`);
    }
    let x = () => {
        if(b){
            console.log(`Your browser support ${print} method.`);
        }else{
            alert(`Your browser does not support ${print} method.`);
            console.log(`Your browser does not support ${print} method.`);
        };
    }
    p.onclick = x();
})();

// ES 6 + IIFE
(() => {
    let b = false;
    console.log(`b === ${b}!`);
    const print = `print()`;
    if(window.print){
        b = true;
        console.log(`b === ${b}!`);
    }
    let x = () => {
        if(b){
            console.log(`Your browser support ${print} method.`);
        }else{
            alert(`Your browser does not support ${print} method.`);
            console.log(`Your browser does not support ${print} method.`);
        };
    }
    x();
})();

const dcs = `IIFE: Douglas Crockford's style`;
// ES 5 + IIFE is OK
(function(){
    alert("IIFE: Douglas Crockford's style");
    console.log(dcs + ", ES 5 is OK!");
}());
// Douglas Crockford's style

// ES 6 + IIFE (error)
/*
    (() => {
        alert(`IIFE: Douglas Crockford's style`);
        console.log(`${dcs},ES 6 is Error!`);
    }());
*/
// Douglas Crockford's style