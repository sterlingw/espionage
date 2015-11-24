var test = require('tape');
var espionage = require('../index.js');

test('espionage#createSpy returns a spy', function(t){
    var spy = espionage.createSpy();

    t.equal(typeof spy.callCount, 'function');
    t.equal(typeof spy.wasCalled, 'function');

    t.end();
});

test('spy returns undefined', function(t){
    var spy = espionage.createSpy();

    t.equal(typeof spy(), 'undefined');

    t.end();
});
