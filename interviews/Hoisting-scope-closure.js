var a = 1;
//"a" is global scope
function b() {
    var a = function() {};
    //"a" is local scope 
    var x = 12;
    //"x" is local scope 
    a = 10;
    //global variable "a" was overwrited by the local variable "a"  
    console.log("local a =" + a);
    return console.log("local x = " + x);
}
b();
// local a =10
// local x = 12
console.log("global a = " + a);
// global a = 1
console.log("can't access local x = \n");
// can't access local x = 
console.log(x);
// ReferenceError: x is not defined

/**
 *  scpope & closure & hoisting (var/function) 
 *
 *  # function hoisting > variable hoisting
 *  
 * 1. scpope : the global var can be access in any place(the whole file scope), local var only can be accessed by the local scope(function/block scope)!
 * Note: if a local variable not using var keywords in a function, it will become a global variable!
 * 
 * 2. closure : a function inner the other function, which can access local scope(parent function) & global scope, howerver it's vars can't be accessed by others! unless, your return it as return value!
 * 
 * 3. hoisting : move all declare/undeclare vars/function to the scope top, than assign the value or null!
 * Note: it just move the declare, not move the value!
 * 
 */
