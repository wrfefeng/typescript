"use strict";
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function () {
        console.log(this.name);
    };
    return Animal;
}());
var arr = [123, 'asd'];
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["err"] = 2] = "err";
})(Flag || (Flag = {}));
var s = Flag.success;
function run() {
    console.log(123);
}
function run1() {
    console.log(456);
}
// 定义方法传参
function getInfo(name, age) {
    return name + " --- " + age + ".";
}
alert(getInfo('wangruifeng', 20));
function fun() {
    console.log('没有返回值');
}
fun();
// 方法的可选参数
function fun1(name, age) {
    console.log('可选参数');
}
fun1('asdasd', 20);
// // es5中的类
// function Person () {
//     this.name = ''
//     this.age
// }
