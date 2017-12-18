//实现一个可写流
var stream = require('stream');
//使用通常的继承模式来创建一个可写流类
GreenStream.prototype = Object.create(stream.Writable.prototype, {//TODO:这种js的写法没有见过
  constructor: { value: GreenStream }
});

function GreenStream(options) {
  stream.Writable.call(this, options);
}
//writable._write所有可写流实现必须提供一个 writable._write() 方法将数据发送到底层资源。
GreenStream.prototype._write = function(chunk, encoding, callback) {
  //进程的知识, 向屏幕输出
  process.stdout.write('\u001b[32m' + chunk + '\u001b[39m');
  callback();
};

process.stdin.pipe(new GreenStream());//TODO:这样写我是理解不了的

//process子进程的知识:
// 每个子进程总是带有三个流对象：
// child.stdin, 输入
// child.stdout 输出
// child.stderr 输出错误

