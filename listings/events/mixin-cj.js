// 获取util 和 events
const util = require('util');
const events = require('events');
// g构造函数Musi继承 event

class Music extends events{
    constructor(){
        super()
    }

}
// 监听play函数 ,回调函数 执行 error
let music=new Music()
music.on('play',function (track) {
    console.log(track)
    this.emit('error','unable to play')
})
// 监听 error
music.on('error',function (err) {
    console.log('error:',err)
})
setTimeout(function () {
    music.emit('play','开始运行')
},1000)
// 单次定时函数 运行 play