let x = new Date();

// window (super global scope variable)


window.Intl.DateTimeFormat('en-US').format(x);
Intl.DateTimeFormat('en-US').format(x);
// "12/18/2016"

window.Intl.DateTimeFormat('zh-CN').format(x);
Intl.DateTimeFormat('zh-CN').format(x);
// "2016/12/18"