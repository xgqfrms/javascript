// 01 Data Types and Values  
/*
1. Undefined (undefined) 

2. Null (null)  

3. Boolean (true/false)  

4. String (textual data)  

5. Symbol (unique & immutable)  

6. Number (NaN/2^64-2^53+3)  

7. Object (data property/accessor property)  
 */
// 02 var hoisting 

var x = 3;
var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function(){
            return this.x;
        }
    }
}

var go = foo.baz.bar;

console.log(go());// 3
console.log(foo.baz.bar());// 1

// 03
console.log(typeof(null));// object (Null)
console.log(typeof({}));// object (Object)
console.log(typeof([]));// object (Array)
console.log(typeof(undefined));// undefined

console.log(typeof(NaN));// number 
console.log(typeof(Null));// undefined 

console.log(typeof(function(){}));// function 

// 04
/*
JavaScript: how to get value of text input field?
http://stackoverflow.com/questions/11563638/javascript-how-to-get-value-of-text-input-field  
http://www.javascript-coder.com/javascript-form/javascript-get-form.phtml  
http://www.w3schools.com/jsref/prop_text_value.asp  
http://www.w3schools.com/jsref/prop_number_value.asp  

https://www.nczonline.net/blog/2010/09/28/why-is-getelementsbytagname-faster-that-queryselectorall/


 */
```codes
<input type="text" id="input-id" placeholder="test" value="test-value">

let x = document.getElementById('input-id');
alert(`x.value = ${x.value}`);
``` 


// 05 IIFE & var hoisting 

(function () {
    var a = b =10;
})();
console.log(b);// 10
console.log(a);// Uncaught ReferenceError: a is not defined


var b;
(function () {
    var a;
    a = 10;
    b = 10;
})();
console.log(b);// 10
console.log(a);// Uncaught ReferenceError: a is not defined

var b;
(function () {
    var a;
    a = 10;
    b = 10;
    console.log("b1 = " + b);
    console.log("a1 = " + a);
})();
console.log("b2 = " + b);
console.log("a2 = " + a);


// 06 closure ??? var names ??? function hoisting & scope 

function fn(a) {
    console.log("a1 = " + a);
    var a = 2;
    function a() { }
    console.log("a2 = " + a);
}
fn(1);
// a1 = function a() { }
// a2 = 2


function fn(a) {
    var a;
    a = function() { }
    // function hoisting > variable hoisting
    console.log("a1 = " + a);
    a = 2;
    console.log("a2 = " + a);
}
fn(1);
// a1 = function a() { }
// a2 = 2



/*
https://stackoverflow.com/questions/40368197/how-js-scope-closures-is-passing-argument

# returns function (auto argument)

https://stackoverflow.com/questions/20340217/js-scope-closure-headache

# 函数关闭变量，而不是变量的值。
# 这是因为函数保持i的引用，而不是i的值。

??? 
http://stackoverflow.com/questions/41198746/how-to-understand-javascript-in-deep-with-var-scope-closure/41198773#41198773

http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html

https://rainsoft.io/javascript-hoisting-in-details/
http://stackoverflow.com/questions/7506844/javascript-function-scoping-and-hoisting/41199567#41199567  


http://stackoverflow.com/questions/41198746/how-to-understand-javascript-in-deep-with-var-scope-closure
 */







