var fs = require('fs')
//压缩
var zlib = require('zlib')
// 异步读取文件 返回buffer对象
var base = fs.readFileSync('./monkey.png')
console.log('base', base.length)
//然后在转义成base64 的string类型
var encoded = base.toString('base64')
// Buffer.byteLength是返回字节长度
console.log('pre', Buffer.byteLength(encoded))
// //解压
// zlib.deflate(encoded, function (er, buf) { console.log('zlib-post', buf.length) })
// //压缩
// zlib.gzip(encoded, function (er, buf) { console.log('gzip-post', buf.length) })

console.log('data:image/png;base64,'+encoded)
fs.writeFileSync('./secondmonkey.png', Buffer(encoded, 'base64'))
