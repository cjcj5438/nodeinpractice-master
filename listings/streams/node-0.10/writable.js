//实现一个可写流
var stream = require('stream');
//使用通常的继承模式来创建一个可写流类
GreenStream.prototype = Object.create(stream.Writable.prototype, {//TODO:这种js的写法没有见过
  constructor: { value: GreenStream }
});

function GreenStream(options) {
  stream.Writable.call(this, options);
}

GreenStream.prototype._write = function(chunk, encoding, callback) {
  process.stdout.write('\u001b[32m' + chunk + '\u001b[39m'); //<co id="callout-streams-writable-2" />
  callback(); //<co id="callout-streams-writable-3" />
};

process.stdin.pipe(new GreenStream()); //<co id="callout-streams-writable-4" />
