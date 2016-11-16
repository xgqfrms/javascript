# 4 New String Methods in ES6

http://wesbos.com/new-es6-string-methods/

https://github.com/xgqfrms-GitHub/webgeeker/blob/gh-pages/ES6-tutorial/String/readme.md




November 16, 2016 at 3:38 am

great post! but here still some little bugs!


```code
# 1
flightNumber.endsWith(jz)
flightNumber.endsWith(`jz`)

# 2
const accountnumber = ‘825242631RT0001’;

const accountNumber = ‘825242631RT0001’;

# 3

const make = ‘BMW’;
const model = ‘x5’
const colour = ‘Royal Blue’;

const make = ‘BMW’;
const model = ‘x5’;
const colour = ‘Royal Blue’;

# 4

leftPad.repeat(str, length = 10){
return `${‘ ‘.repeat(length – str.length)}${str}`;
}

let leftPad = (str, length = 10) => {
return `${‘ ‘.repeat(length – str.length)}${str}`;
}

``` 


