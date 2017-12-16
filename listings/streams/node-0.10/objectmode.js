//使用ObjectMode 配置的流  好像不能转转成ES6的语法
var stream = require('stream');
var util = require('util');

//stream.Readable 文件可读时触发的类 有下面四个事件类
// 关闭后触发close
// 流将数据传递给消费者时触发:data
// 所有的流被消费完了  触发end
// error
// 有数据可以读时触发readable
util.inherits(MemoryStream, stream.Readable);

function MemoryStream(options) {
  options = options || {};
  //TODO:当使用objeckMode时,流动底层行为发生了改变,用来除去内部缓存区合并和长度检查,并且读取的和写入的时忽略大小写
  options.objectMode = true;
  stream.Readable.call(this, options);
}

MemoryStream.prototype._read = function(size) {
    // readable.push() 把数据添加到每部队列,可以使用readable.read()来获取数据.   也可以用来监听data事件
  this.push(process.memoryUsage());
};

var memoryStream = new MemoryStream();
memoryStream.on('readable', function() { //<co id="listing-streams-objectmode-3" />
  var output = memoryStream.read();//sream.read();是获取最新的流
  console.log('Type: %s, value: %j', typeof output, output);
});
