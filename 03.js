"use strict";
// class Per {
//   public name: string
//   constructor (name:string) {
//     this.name = name
//   }
//   run () {
//     console.log('实例方法')
//   }
//   static print () {
//     console.log('静态方法')
//   }
// }
// // 多态：父类定义一个方法不去实现，让继承的子类去实现，每个子类有不同的表现
// // 多态属于继承
// class Animale {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   eat () {
//     console.log('eat')
//   }
// }
// class Dog extends Animal {
//   constructor(name:string) {
//     super(name)
//   } 
//   eat () {
//     return `dog`
//   }
// }
// abstract class Pay {
//   public name:string
//   constructor(name: string) {
//     this.name = name
//   }
//   abstract eat ():any {
//     console.log(123)
//   }
// }
// class Dog extends Animal {
//   eat () {}
// }
// // 接口定义标准
// // 属性接口 对JSON的约束
// function printLabel (labelInfo: {label: string}):void {
//   console.log(23)
// }
// // ts中定义方法传入参数
// printLabel({label: '123'})
// // ts自定义方法传入参数对json约束
// interface FullName {
//   firstName: string;
//   lastName: string;
// }
// function printName (name: FullName) {
//   // 必须传入对象 firstName lastName
//   console.log(name)
// }
// printName({firstName: 'sad', 'lastName': 'ss'})
// // 对批量方法进行约束
// interface FullName {}
