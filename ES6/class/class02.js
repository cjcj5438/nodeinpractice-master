class A {
    constructor() {
        this.x = 1;
    }
    print() {
        console.log(this.x);
    }
}

class B extends A {
    constructor() {
        super();
        console.log('this是:',this)
        this.x = 2;
    }
    m() {
        super.print();
        console.log('this是:',this)
    }
}

let b = new B();
b.m() // 2
