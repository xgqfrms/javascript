# ES6 & IIFE  

https://www.nczonline.net/blog/2016/10/the-ecmascript-2016-change-you-probably-dont-know/  

https://github.com/rwaldron/tc39-notes/blob/d0c651b358b361b0855cfe7af9ba0b76cab73949/es7/2015-07/july-29.md#611-the-scope-of-use-strict-with-respect-to-destructuring-in-parameter-lists

https://docs.npmjs.com/misc/scripts


## ES6 "use strict" IIFE

> ??? ES6 “use-strict” IIFE function OK  


```js
const doSomething = (function() {
    "use strict";

    return function(value=42) {
        return value;
    };
});
// undefined

const doIIFE = (function() {
    "use strict";

    return function(value=42) {
        return value;
    };
}());
// undefined

const newIIFE = (function() {
    "use strict";

    return function(value=42) {
        return value;
    };
})();
// undefined

``` 






