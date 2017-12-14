const util = require('util');
const events=require('events');
//TODO: 用于密切关注新的监听
function EventTrack() {
    events.EventEmitter.call(this)
}
util.inherits(EventTrack,events.EventEmitter)
 var eventTrack=new EventTrack()
// 当有newListener事件时,监听的函数会制动执行emit 触发函数, 一旦有监听就会开始追踪
eventTrack.on('newListener',function (name, listener) {
    console.log('event name added:',name)
})
eventTrack.on('a',function () {
    console.log('a')
})

eventTrack.on('b',function () {
    console.log('b')
})
eventTrack.emit('b')