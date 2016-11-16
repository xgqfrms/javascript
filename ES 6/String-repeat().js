/*
http://wesbos.com/new-es6-string-methods/#comment-105457
https://github.com/xgqfrms-GitHub/webgeeker/blob/gh-pages/ES6-tutorial/String/readme.md
https://gist.github.com/xgqfrms-GitHub/8b20b576edb8c9e74e6dfae2655c7077
https://zhuanlan.zhihu.com/p/23713602
*/


const make = 'BMW';
const model = 'x5'
const colour = 'Royal Blue';

// left align(default)
console.log(`\nleft align(default) : \n\n` + make);
console.log(model);
console.log(colour);
/*
BMW
x5
Royal Blue
*/

let leftPad = (str, length = 10) => {
    return `${' '.repeat(length - str.length)}${str}`;
}
// right align
console.log(`\nright align :\n\n` + leftPad(make));
console.log(leftPad(model));
console.log(leftPad(colour));
/*
       BMW
        x5
Royal Blue
*/