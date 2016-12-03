# JavaScript的最佳实践

[JavaScript的最佳实践](http://www.w3schools.com/js/js_best_practices.asp)

## Avoid global variables,  avoid new,  avoid  ==,  avoid eval()


## 避免全局变量


## 始终声明局部变量

* 在函数中使用的所有变量应声明为局部变量。
* 局部变量必须使用**var**关键字来声明，否则，他们将成为全局变量。


? ES 6  let

> 严格模式不允许未声明的变量。


## 声明在最上面

> 默认情况下，JavaScript的移动所有声明到最顶端 
  (JavaScript的**变量提升**)。

## 初始化变量

> 初始化变量提供的预期用途的想法（和预期的数据类型）。


## 永远不要声明数字，字符串或布尔对象

> 始终将数字，字符串或布尔值作为**原始值**。不作为对象。
  声明这些类型为对象，减慢执行速度，并产生讨厌的副作用：

```code
var x = "John";             
var y = new String("John");
(x === y) 
// is false because x is a string and y is an object.


var x = new String("John");             
var y = new String("John");
(x == y) 
// is false because you cannot compare objects.
``` 


## 不要使用 new Object()

使用{}，而不是new Object()

使用 {} 代替 new Object()
使用 "" 代替 new String()
使用 0  代替 new Number()
使用 false 代替 new Boolean()
使用 [] 代替 new Array()
使用 /()/ 代替 new RegExp()
使用function (){} 代替 new Function()

```code
var x1 = {};           // new object
var x2 = "";           // new primitive string(原始)
var x3 = 0;            // new primitive number
var x4 = false;        // new primitive boolean
var x5 = [];           // new array object
var	x6 = /()/;         // new regexp object
var x7 = function(){}; // new function object
``` 

## 提防类型的自动转换
> 要注意的是数字可以不小心将它转换为字符串或NaN（非数字）。
  JavaScript是弱类型。
  变量可以包含不同的数据类型，且可变可以改变它的数据类型：

```code
var x = "Hello";     
// typeof x is a string
x = 5;               
// changes typeof x to a number
``` 

当做数学运算时，JavaScript可以把数字转换为字符串：


从字符串中减去一个字符串，不会产生错误，但返回NaN（非数字）：

```code
"Hello" - "Dolly";

// returns NaN
``` 

## 使用===比较(全相等)

== 比较运算符，总是比较之前转换(来匹配类型)。

=== 运算符强制值和类型的比较：


## 使用默认参数


如果一个缺失一个参数的函数被调用，缺失的参数的值被设置为undefined。

未定义值可以破坏你的代码。

这是一个好习惯，给参数分配一个默认值。

```code
function myFunction(x, y) {
    if (y === undefined) {
        y = 0;
    }
}
``` 


# 了解更多关于函数的参数和参数 

[JavaScript函数参数](http://www.w3schools.com/js/js_function_parameters.asp)



## 使用Defaults,结束Switches 

```code
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Unknown";
}
``` 

## 避免使用 eval()

> eval()函数用来把**文本**当作**代码**运行。


在几乎所有的情况下，应该是没必要使用它的。

因为它允许任意代码被运行，它也表示是一个安全问题。





