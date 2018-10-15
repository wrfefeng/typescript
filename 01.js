/**
 * Created by WebStorm.
 * User: wrf
 * Date: 2018/9/25
 * Time: 13:21
 */

// es5 中的类
// 1.最简单的类
function Person () {
  this.name = 'wrf'
  this.age = 20
}

var p = new Person()
alert(p.name)

// 2.构造函数和原型链里增加方法
function Person () {
  this.name = '张三'
  this.age = 10
  this.run = function () { // 实例方法，必须实例化才能调用
    alert(this.name + '在运功')
  }
}

// 在原型链上扩展属性和方法
// 原型链上面的属性会被多个实例共享，构造函数不会
Person.prototype.sex = '男'
Person.prototype.work = function () {
  console.log('在工作')
}

var p = new Person()
p.run()
p.work()

// 3.类里面的静态方法

Person.getInfo = function () {
  console.log('静态方法')
}

Person.getInfo() // 调用静态方法


// 4.对象冒充实现继承
// web 类继承Person
// es5中 原型链+对象冒充组合继承模式

function Web() {
  Person.call(this)  /*对象冒充实现继承*/
}

var w = new Web()
w.run() /*对象冒充可以继承构造函数里面的属性和方法*/
w.work()/*对象冒充不可以继承原型链上面的属性和方法*/

// 原型链实现继承
function Person() {
  this.name = '张三'
  this.age = 10
  this.run = function () { // 实例方法，必须实例化才能调用
    alert(this.name + '在运功')
  }
}

Person.prototype.sex = '男'
Person.prototype.work = function () {
  console.log('在工作')
}

function Web () {

}

Web.prototype = new Person() /*原型链实现继承*/
// 可以继承构造函数里面的属性和方法，还可以继承原型链里面的属性和方法
var w = new Web()
w.run()
w.work()

// 6.原型链继承的问题

function Person(name, age) {
  this.name = name
  this.age = age
  this.run = function () { // 实例方法，必须实例化才能调用
    alert(this.name + '在运功')
  }
}

Person.prototype.sex = '男'
Person.prototype.work = function () {
  console.log(this.name + '在工作')
}

var p = new Person('李四', 20)

function Web(name, age) {

}

Web.prototype = new Person()

var w = Web('赵四', 20) /*实例化子类时候没办法给父类传参*/
w.run() // undefined 在运动
var w1 = Web('王五', 20)

// 原型链 + 对象冒充
function Web(name, age) {
  Person.call(this, name, age) // 对象冒充，实例化子类可以给父类传参
}

Web.prototype = new Person()

var w = new Web('赵四', 20)
w.run() // 赵四在运动
w.work()// 赵四在工作
