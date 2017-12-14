function prototypeExtend() {
    //这里的F是用来缓存的
    let F = function () {},
        args = arguments,
        i = 0,
        len = args.length;
    for (; i < len; i++) {
        for (let j in args[i]) {
            F.prototype[j] = args[i][j];
        }
    }
    return new F()
}

let penguin = prototypeExtend({
    speed: 20,
    swin: function () {
        console.log('游泳速度', this.speed);
    },
    run: function () {
        console.log('奔跑速度', this.speed)
    }
});
penguin.run()
penguin.swin()