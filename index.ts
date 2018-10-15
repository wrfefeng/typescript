class Animal {
    name:  string
    constructor(name: string) {
        this.name = name
    }
    move () {
        console.log(this.name)
    }
}

let arr: [number, string] = [123, 'asd']

enum Flag {
    success= 1,
    err = 2
}

let s:Flag = Flag.success

function run (): void{
    console.log(123)
}

function run1 (): any {
    console.log(456)
}

// 定义方法传参
function getInfo (name: string, age: number):string {
    return `${name} --- ${age}.`
}

alert(getInfo('wangruifeng', 20))

function fun() :void {
    console.log('没有返回值')
}

fun()

// 方法的可选参数
function fun1 (name: string, age?: number) {
    console.log('可选参数')
}

fun1('asdasd', 20)

// // es5中的类
// function Person () {
//     this.name = ''
//     this.age
// }
