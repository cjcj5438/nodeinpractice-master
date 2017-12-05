var EventEmitter = require('events').EventEmitter;

function complexOperations() {
  var events = new EventEmitter();
//用 process.nextTick包裹事件触发是先执行的
  process.nextTick(function() { //<co id="callout-globals-nexttick-2"/>
      console.log('success1!');
    events.emit('success');
  });

  return events;
}

complexOperations().on('success', function() {
  console.log('success2!');
});

