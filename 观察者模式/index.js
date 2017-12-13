let Oserver = (function () {
    let _messages = {};
    return {
        regist: function (type, fn) {
            //如果消息不存在, 应当创建该条消息类型
            if (typeof _messages[type] === '
            } else {
                //如果存在,将动作方法推入该消息对应的动作执行序列中去undefined') {
            //将动作推入该消息对应的动作,执行列队中
            _messages[type] = [fn]
                _messages[type].push(fn);
            }
        },
        fire: function (type, args) {
            if (!_messages[type]) {
                return;
            }
            //定义消息信息
            let events = {
                    type: type,//消息类型
                    args: args || {}//消息携带的数据
                },
                i = 0,
                len = _messages[type].length;
            for (; i < len; i++) {
                //依次执行注册的 消息对应的动作序列
                //解读这句话, 就是_messages[type][i]里的对象代替this的对象
                _messages[type][i].call(this, events)
            }
        },

        remove: function (type, fn) {
            //如果消息队列存在
            if (_messages[type] instanceof Array) {
                let i = _messages[type].length - 1;
                // 倒叙遍历,删除响应的方法
                for (; i >= 0; i--) {
                    _messages[type][i] === fn && _messages[type].splice(i, 1)
                }
            }
        }
    }
})();

Oserver.regist('test',function (e) {
    //TODO:这里为什么可以是e.type 和e.args.msg 呢?  是因为e直接理解成一个参数, 斌不是什么事件的
    console.log(e.type,e.args.msg)
})

Oserver.fire('test',{msg:'你好'}) //{msg:'你好'} 在fire方法里面定义了消息信息,赋值给了args