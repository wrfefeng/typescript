// ts中类的定义
class Person {
    name: string // 省略public关键字
    constructor(n: string) { // 构造函数 实例化类的时候触发的方法
        this.name = n
    }
    run():void {
        console.log(this.name)
    }
    getName (): string {
        return this.name
    }
    setName (name: string): void {
        this.name = name
    }
}

let p = new Person('张三')
p.run()
