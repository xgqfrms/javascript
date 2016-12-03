# Javascript 严格模式("use strict";)详解


## [http://www.w3schools.com/js/js_strict.asp](http://www.w3schools.com/js/js_strict.asp)  
```code
"use strict";定义JavaScript代码应该在"strict mode"下被执行。

"use strict"指令是JavaScript 1.8.5 (ECMAScript的第5版)新增的。

这不是一个声明，而是一个字面量表达，会被早期版本的JavaScript忽略掉。

"use strict"的目的是为了指明代码应该在"strict mode"下被执行。

例如，在"strict mode"下，你不能使用未被声明的变量。
``` 
### 声明严格模式
严格模式的声明是通过将"use strict";添加到一个脚本或一个函数的开头位置来实现的。

```js
"use strict";
x = 3.14;       
// 这将会产生一个错误，因为x是未被声明的。

"use strict";
myFunction();

function myFunction() {
    y = 3.14;
    // 这将会产生一个错误，因为y是未被声明的。
}
``` 

### 在一个函数内部中声明("use strict";)，它具有局部作用域(只在函数内部的代码是执行在严格模式下)


```js
x = 3.14;       
// 这将会产生一个错误，因为x是未被声明的。
myFunction();

function myFunction() {
   "use strict";
    y = 3.14;   
    // 这将会产生一个错误，因为y是未被声明的。
}
``` 

## 为什么要使用严格模式？

声明严格模式的语法，被设计是为了兼容旧版本的JavaScript。

严格模式可以更容易地编写“安全”的JavaScript。

严格模式将以前被接受的“错误语法”改变为真正的错误。

例如，
在标准的JavaScript中，错误输入一个变量名会创建一个新的全局变量。
在严格模式下，这将抛出一个错误，这使得意外地创建一个全局变量成为不可能。

在标准的JavaScript，开发人员将不会收到任何错误反馈，赋值给非可写的属性。
在严格模式下，赋值给任何：一个非可写的属性，一个只读的属性，一个不存在的属性，
一个不存在的变量，或一个不存在的对象，都将抛出一个错误。



面向未来！ 
未来保留的关键字在严格模式是不允许的。
implements
interface
let
package
private
protected
public
static
yield

# 小心！

"use strict"指令只能在一个脚本或一个函数的开头被识别。

































