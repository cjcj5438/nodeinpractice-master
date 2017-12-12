// 获取util 和 events
const util = require('util');
const event = require('events');

// 类 pulsar   参数 speed times 同时监听 newListner 函数事件 回调函数 如果函数函数书pulse 时 运行原型上的start 函数


class Pulsar extends event.EventEmitter {
    constructor(speed, times) { //子类参数
        super();//父类的参数
        this.speed = speed;
        this.times = times;
        this.on('newListener', function (eventName, listener) {
           if (eventName === 'pulse') {this.start()}
        })
    }
}

// 继承event.Evnet...

// Pulsar原型方法添加start 函数   添加定时器函数, id
Pulsar.prototype.start = function () {
    var self = this;
    var id = setInterval(function () {
        self.emit('pulse');
        self.times--;
        if (self.times == 1) {
            clearInterval(id)
        }
    }, this.speed)
}

// 监听函数pulsar  回调函数执行console.log

var pulsar = new Pulsar(500, 5);

pulsar.on('pulse', function () {
    console.log('.')
})

//TODO:还有中方法在原型上添加方法方法    >>>
//可以给对象Person动态的增加方法,而Person.prototype = {}是覆盖对象的方法,或者在初始化的时候添加方法。
/**
 Object.assign(Person.prototype,{
    getWidth(){
        console.log('12');
    },
    getHeight(){
        console.log('24');
    }
});
 console.log(Person.prototype);
 */