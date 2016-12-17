var x = 3;
var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function(){
            console.log("this.x = "+this.x);
            return this.x;
        }
    }
}

var go = foo.baz.bar;
var go1 = foo.baz;
var go2 = foo;

console.log(go());
console.log(go);
console.log(go1);
console.log(go2);
console.log(foo.baz.bar());
console.log(foo.baz.bar);
