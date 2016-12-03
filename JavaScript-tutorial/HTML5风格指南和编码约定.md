# HTML5风格指南和编码约定


[Visit the HTML Style Guide.](http://www.w3schools.com/html/html5_syntax.asp)


## HTML编码约定



## 聪明，面向未来



> 始终保持你的代码整洁，干净，良好的。



## Use Correct Document Type


<!DOCTYPE html>

<!doctype html>

## 使用小写的元素名称

## 关闭所有的HTML元素

## 关闭空HTML元素

## 使用小写的属性名称

## 属性值引号

## 图像属性

## 等号两边不要空格

## 避免长的代码行(尽量避免行代码超过80个字符)

## 空行和缩进

## 省略\<HTML\>,<body>,和<head> ?

## 元数据

## HTML注释

短注释应写在一行上，就像这样：
<!-- This is a comment -->

跨越多行注释，应该这样写：
<!-- 
  This is a long comment example. This is a long comment example.
  This is a long comment example. This is a long comment example.
-->

长注释更容易观察，如果他们缩进两个空格。




## 样式表

使用简单的语法链接到样式表（type属性是没有必要的）：

<link rel="stylesheet" href="styles.css">


简短的规则可以写成压缩，在一行上，像这样：
```css
p.intro {font-family: Verdana; font-size: 16em;}
``` 

长的规则应该写成多行：

```css
body {
  background-color: lightgrey;
  font-family: "Arial Black", Helvetica, sans-serif;
  font-size: 16em;
  color: black;
}
``` 



## 在HTML中加载
使用简单的语法，用于加载外部脚本（type属性是没有必要的）：

```code
< script src="myscript.js">
``` 




## 使用JavaScript 访问HTML 的元素


var obj = getElementById("Demo")

var obj = getElementById("demo")


## .htm和.html的之间区别/差异

.htm和.html扩展之间没有区别

两者都将被视为HTML,通过任何网络浏览器或web服务器。

差异是文化：

.htm "smells"早期的DOS系统中，系统限制扩展到3个字符的
.html "smells"是没有这个限制的Unix操作系统。

## 技术差异

当URL没有指定一个文件名(如http://www.w3schools.com/css/)，服务器返回一个默认的文件名。

常见的默认文件名是index.html，index.htm，default.html和default.htm。

如果您的服务器配置只能用“index.html”作为默认文件名，您的文件必须被命名为“index.html”，而不是“index.htm”

然而，服务器配置可以多个默认的文件名，通常您可以根据需要设置为多个默认的文件名。


总之，HTML文件完整的扩展名是.htm ，而且也没有理由不应该被使用。






# 从 HTML4 迁移到 HTML5 

[HTML5 Migration](http://www.w3schools.com/html/html5_migration.asp)

<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<![endif]-->

## <article> <section> 和 <div>之间的区别的

这里有一个令人困惑的区别(缺乏)在HTML5标准中，关于<article> <section> 和 <div>之间的区别

<section>元素被定义为一个相关元素的块。

<article>元素被定义为一个完整的，自包含相关元素的块。

<div>元素被定义为子元素的块。

如何解释呢？

<section>
	<article></article>
</section>

<article>
	<article></article>
</article>

<article>
	<section></section>
</article>