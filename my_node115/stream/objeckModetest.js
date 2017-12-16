//获取stream和util
const stream = require('stream');
const util = require('util');

// 函数MemoryStream继承 stream.Readable
class MemoryStream extends stream.Readable {
    constructor(options) {
        super();
        options = options || {};
        options.objeckMode=true;

        stream.Readable.call(this, options);
    };
    _read() {
        this.push(process.memoryUsage());
    }
}

let memoryStream = new MemoryStream()
memoryStream.on('readable', function () {
    let output = memoryStream.read();
    console.log('type:%s,value:%j', typeof output.output)
})
// 设置参数objeckMode

// 在_read上push process,memoryUseage()

// 然后监听readable