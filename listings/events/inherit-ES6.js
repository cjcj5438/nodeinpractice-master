const events = require('events').EventEmitter;
const util = require('util');

let AudioDevice = {
    play: function (track) {
        console.log(track)
    },
    stop: function () {
        console.log('stop')
    }
};

class M extends events {
    constructor() {
        super();
        this.playing = false;
    }
}

var musicPlayer = new M();

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
