var util = require('util');
var events = require('events');
var AudioDevice = {
    play: function (track) {
        console.log(track)
        // Stub: Trigger playback through iTunes, mpg123, etc.
    },
    stop: function () {
        console.log('stop')
    }
};

function MusicPlayer() {
    this.playing = false;
    //.call就可以使用events
    events.EventEmitter.call(this);
}

//MusicPlayer继承events.EventEmitter
util.inherits(MusicPlayer, events.EventEmitter);

var musicPlayer = new MusicPlayer();
//TODO:emitter.on(eventName, listener) 监听函数
musicPlayer.on('play', function (track) {
    this.playing = true;
    AudioDevice.play(track);
});

musicPlayer.on('stop', function () {
    this.playing = false;
    AudioDevice.stop();
});
//按监听器的注册顺序，同步地调用每个注册到名为 eventName 事件的监听器，并传入提供的参数。
musicPlayer.emit('play', 'The Roots - The Fire');

setTimeout(function () {
    musicPlayer.emit('stop');
}, 1000);
