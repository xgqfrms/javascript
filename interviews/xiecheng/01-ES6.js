let foo, go, go1, go2, x = 3;

foo = {
    x: 2,
    baz: {
        x: 1,
        bar: () => {
            console.log(`this.x = ${this.x}`);
            return this.x;
        }
    }
}

go = foo.baz.bar;
go1 = foo.baz;
go2 = foo;

console.log(go());
console.log(go);
console.log(go1);
console.log(go2);
console.log(foo.baz.bar());
console.log(foo.baz.bar);

/*

Object

this

chain 


*/