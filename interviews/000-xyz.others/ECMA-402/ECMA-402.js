/**
 * https://github.com/ufo-github/globalize/tree/master/Tutorial  
 */

let x = new Date();

// window (super global scope variable)

window.Intl.DateTimeFormat('en-US').format(x);
Intl.DateTimeFormat('en-US').format(x);
// "12/18/2016"

window.Intl.DateTimeFormat('zh-CN').format(x);
Intl.DateTimeFormat('zh-CN').format(x);

// "2016/12/18"

let date= new Date(),
    number= 1234567893.1415926927;

console.log(new Intl.NumberFormat('zh-CN').format(number));
console.log(new Intl.NumberFormat('en-US').format(number));
console.log(new Intl.NumberFormat('en-GB').format(number));
console.log(new Intl.NumberFormat('it-IT').format(number));

console.log(new Intl.DateTimeFormat('zh-CN').format(date));
console.log(new Intl.DateTimeFormat('en-US').format(date));
console.log(new Intl.DateTimeFormat('en-GB').format(date));
console.log(new Intl.DateTimeFormat('it-IT').format(date));

/*
"1,234,567,893.142"
"1,234,567,893.142"
"1,234,567,893.142"

"1.234.567.893,142"

"2016/12/18"

"12/18/2016"

"18/12/2016"
"18/12/2016"
 */










