// https://zhuanlan.zhihu.com/p/24349496  

/**
 * How to using Multiple JavaScript window.onload() Functions
 */

// several function calls in a chain


/**
 * <body onload="func1(); func2(); func3();">
 */

// Within Another Function

let load = () => {
    (() => {
        console.log(`func1`);
    })();
    (() => {
        console.log(`func1`);
    })();
}
window.onload = load();

// The addLoadEvent Function

function addLoadEvent(func) {
    var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function() {
                if (oldonload) {
                    oldonload();
                }
            func();
        }
    }
}
addLoadEvent(nameOfSomeFunctionToRunOnPageLoad);
addLoadEvent(function(){/* more code to run on page load */});


// calls two functions and adds a third, independent addLoadEvent:

function func1() {
    alert("This is the first.");
}
function func2() {
    alert("This is the second.");
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
addLoadEvent(func1);
addLoadEvent(func2);
addLoadEvent(function() {
    document.body.style.backgroundColor = '#EFDF95';
});

// jquery : http://learn.jquery.com/using-jquery-core/document-ready/




// HTML5 DOMContentLoaded 

/**
 * https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onload
 * https://developer.mozilla.org/en-US/docs/Web/Events
 * https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener
 * https://www.w3.org/TR/dom/#dom-eventtarget-addeventlistener
 */


