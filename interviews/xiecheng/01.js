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

console.log(go());
console.log(foo.baz.bar());

// 03


// 04

// 05