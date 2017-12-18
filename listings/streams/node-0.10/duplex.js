var stream = require('stream');
//一般的继承方法
HungryStream.prototype = Object.create(stream.Duplex.prototype, {
  constructor: { value: HungryStream }
});
//取货父类的方法.
function HungryStream(options) {
  stream.Duplex.call(this, options);
  this.waiting = false;
}

HungryStream.prototype._write = function(chunk, encoding, callback) {
  this.waiting = false;
  this.push('\u001b[32m' + chunk + '\u001b[39m');
  callback(); //<co id="callout-streams-duplex-2" />
};

HungryStream.prototype._read = function(size) {
  if (!this.waiting) {
    this.push('Feed me data! > '); //<co id="callout-streams-duplex-3" />
    this.waiting = true;
  }
};

var hungryStream = new HungryStream();
process.stdin.pipe(hungryStream).pipe(process.stdout); //<co id="callout-streams-duplex-4" />
