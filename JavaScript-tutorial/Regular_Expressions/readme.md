# JavaScript 蜘蛛

如何使用JavaScript编写蜘蛛，以便从目标网站自动下载一些svg图像！


https://gist.github.com/xgqfrms-GitHub/0bf82ff06037a0d1776c9f30033cbfd1



http://www.cnblogs.com/post/readauth?url=/xgqfrms/p/6942147.html



https://rollbar.com/docs/


```js

const links = document.querySelectorAll(`ul.image-list a`);

console.log(getComputedStyle(links[0], ':before').getPropertyValue('background-image'));
// url("https://rollbar.com/assets/shared/logos/ruby-icon.svg")

let img = getComputedStyle(links[0], '::before').getPropertyValue('background-image');
// url("https://rollbar.com/assets/shared/logos/ruby-icon.svg")

let newImage= img.replace(/(url\(")|("\))/g,'');
// "https://rollbar.com/assets/shared/logos/ruby-icon.svg"

console.log(newImage);
// https://rollbar.com/assets/shared/logos/ruby-icon.svg




/*
add new key to object javascript


https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object
*/



/*

JS Object Deep Copy & 深度拷贝问题

https://gist.github.com/xgqfrms-GitHub/61b92cd14761e71d9922cb182550ba11

 */




var a = $("<a>")
    .attr("href", "http://i.stack.imgur.com/L8rHf.png")
    .attr("download", "img.png")
    .appendTo("body");

a[0].click();

a.remove();
```


```js
const links = document.querySelectorAll(`ul.image-list a`);

let svg_name_arr = [];
let svg_url_obj = {};

for (let i = 0; i < links.length; i++) {
    if (links[i].getAttribute('class')) {
        let x = links[i].getAttribute('class');
        let y = links[i].setAttribute('download', `${i}-${x}`.svg)
        svg_name_arr.push(x);
        let img = getComputedStyle(links[i], '::before').getPropertyValue('background-image');
        let newImage = img.replace(/(url\(")|("\))/g,'');
        svg_url_obj[i] = newImage;
    }
}

console.log(`svg_name_arr = \n`, svg_name_arr);

console.log(`svg_url_obj = \n`, svg_url_obj);

```













