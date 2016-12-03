# JavaScript的风格指南和编码约定

[http://www.w3schools.com/js/js_conventions.asp](http://www.w3schools.com/js/js_conventions.asp)

## 编码约定编程风格指南,包括：

变量和函数的命名和声明规则。
使用空格，缩进和注释的规则。
编程实践和原则

## 编码规范安全质量：

提高代码的可读性
使代码维护更轻松



> 编码约定可以作为团队遵循的被记录的规则，或者只是你个人的编程习惯


## 使用驼峰的标识符名称(变量和函数)。



## 空格围绕操作符

始终把空格围绕在操作符(= + - * /)和逗号后：


## 代码缩进
始终使用4个空格缩进代码块：

> 不要缩进使用制表符（制表）。不同的编辑解释标签不同。

## 声明规则

>对于简单的语句一般规则：始终以分号结束一个简单的语句。


>对于复杂的（复合）语句的一般规则：

    把左括号在第一行的末尾。
    左括号前使用一个空格。
	右括号换一个新行，没有前导空格。
	不要以分号结束一个复杂的声明。


Functions: 
Loops:
Conditionals:


## 对象规则

对象定义的一般规则：
	将左括号在同一行作为对象名称。
	使用冒号在每个属性和其值之间加上一个空格。
	使用引号围绕字符串值，而不是围绕数字值。
	不要最后一个属性值对后添加一个逗号。
	放置在一个新行右括号，没有前导空格。
	始终以分号结束对象定义。

```code
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
``` 

	短的对象可以写压缩，在一行，使用空格在属性之间：

```code
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
``` 

## 行长度 < 80 字符

> 为了增强可读性，避免超过80个字符的行。

如果一个JavaScript语句不适合在一行，打破它最好的地方，是一个运算符或逗号之后。

```code
document.getElementById("demo").innerHTML =
    "Hello Dolly.";
``` 


## 命名约定
> 始终使用所有的代码相同的命名约定。例如；

变量和函数名写为驼峰
全局变量大写（我们不这样做，但它是很常见的）
常量（如PI）写成大写


是否你应该在变量名在中使用hyp-hens，驼峰，或under_scores？

这是一个程序员经常讨论的问题。答案取决于你问谁：

连字符 HTML和CSS：

> HTML5属性可以使用data-开始 (data-quantity, data-price)。
  CSS在属性名称使用连字符 (font-size)。

> 连字符可以被误认为尝试减法。连字符在JavaScript的名字不允许的。

下划线,强调：

> 许多程序员喜欢使用下划线(date_of_birth)，尤其是在SQL数据库
  下划线经常在PHP文档中使用。

PascalCase:

> PascalCase往往是由C程序员首选。

camelCase:

> 驼峰被使用于JavaScript本身,jQuery和其他JavaScript库。

### 不要用$符号开头的名称。这将让你在冲突中有许多JavaScript库的名称。


## 在HTML中加载JavaScript


使用简单的语法，用于加载外部脚本（type属性是没有必要的）：

```code
<script src="myscript.js"></script>
``` 

## 访问HTML元素

使用 不整洁("untidy") HTML样式的后果，可能会导致JavaScript错误。

* 这两个JavaScript语句会产生不同的结果：

var obj = getElementById("Demo");

var obj = getElementById("demo");

如果可能的话，使用HTML相同的命名约定 (如同JavaScript一样)。


# HTML5风格指南和编码约定
[Visit the HTML Style Guide.](http://www.w3schools.com/html/html5_syntax.asp)

## 文件扩展名

HTML文件应该有一个.html扩展名(不要用.htm)
CSS文件应该有一个扩展名为.css
JavaScript文件应该有一个.js扩展名



## 使用小写文件名

大多数Web服务器（Apache，UNIX）有关文件名大小写敏感：

london.jpg不能作为London.jpg访问。


其他Web服务器（微软，IIS）是不区分大小写：

london.jpg可以作为London.jpg或london.jpg访问。


如果使用大小写混合，你必须非常一致。

如果你从一个大小写不敏感的服务器，向一个大小写敏感的服务器移动，即使是小错误可以导致你的网站崩溃

为了避免这些问题，始终使用小写的文件名(如果可能)


## 性能

不被电脑使用的编码约定。
多数规则对程序的执行没有什么影响。


缩进和多余的空格，在小脚本不显著。

对于开发代码，可读性应该是首选。

较大的生产脚本应该被压缩。














