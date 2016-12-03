/*
// factorial 阶乘
function factorialize(num) {
	if (num === 0) {// === all equal (in case of boolean == False)
		return 1;// 0! = 1
	} else {
		let sum = 1;//ES 6
		for (var i = 1; i <= num; i++) {
			sum *=i;//n! = 1x2x3x4x5...x(n-1)x(n)
		}
		return sum;
	}
}
factorialize(5);
document.getElementById("num").innerHTML = "factorialize(5) === ";
document.getElementById("demo").innerHTML = factorialize(5);
console.log("\nfactorialize(0)="+factorialize(0));
console.log("\nfactorialize(1)="+factorialize(1));
console.log("\nfactorialize(2)="+factorialize(2));
console.log("\nfactorialize(3)="+factorialize(3));
console.log("\nfactorialize(4)="+factorialize(4));
console.log("\nfactorialize(5)="+factorialize(5));
// big num ? overflow  
console.log("\nfactorialize(100)="+factorialize(100));
//100! = 9.33262154439441e+157 (科学记数法)
console.log("\nfactorialize(170)="+factorialize(170));
//170! = 7.257415615308004e+306
console.log("\nfactorialize(170)="+factorialize(171));
//171! = Infinity (overflow )
console.log("\nfactorialize(1000)="+factorialize(1000));
//1000! = Infinity (overflow )
*/
// factorial 阶乘
function factorialize(num) {
	if (num === 0) {// === all equal (in case of boolean == False)
		return 1;// 0! = 1
	} else {
		let sum = 1;//ES 6
		for (var i = 1; i <= num; i++) {
			sum *=i;//n! = 1x2x3x4x5...x(n-1)x(n)
		}
		return sum;
	}
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// http://www.w3school.com.cn/tiy/t.asp?f=jseg_regexp_nondigit
// http://www.w3school.com.cn/jsref/jsref_match.asp
function outClick(){
	let iv = document.getElementById('input1').value;
	console.log(iv);
	// regex (/^[0,9]*$/)
	// only num [0,170]
	var reg = /\D+/gi;// 查找非数字字符。//No char == null

	/*
	more adding 
	if(0-170){
		cal
	}else{
		no cal
		//alert infinity
	}
	*/

	// No need ^开头 $结尾
	// var pattern = new RegExp(reg);
	var flag = iv.match(reg);//null || x,y,z,....
	/*
	match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
	该方法类似 indexOf() 和 lastIndexOf()，但是它返回指定的值，而不是字符串的位置。
	*/
	// var flag = pattern.exec(iv);
	console.log(flag);
	//exec() 方法:返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。
	// let reg = iv.regex();
	if (!flag) {
		document.getElementById("num").innerHTML = "factorialize("+iv+") === ";
		document.getElementById("demo").innerHTML = factorialize(iv);
		// document.getElementById("out1").innerHTML = "input1 = "+ iv;
		// alert(iv);
	} else {
		// alert("Error!\n\""+ iv +"\"\ninput value invalid");
		document.getElementById("num").innerHTML = "factorialize("+iv+") === ";
		document.getElementById("demo").innerHTML = "<mark>Error!</mark><br>input value invalid";
		// document.getElementById("out1").innerHTML = "input1 = "+ iv;
	}
}