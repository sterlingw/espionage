var test = require('tape');
var espionage = require('../index.js');

function add5(num) {
    return num + 5;
}

test('espionage#spyOn returns a function', function(t){
    var spy = espionage.spyOn(function(){});

    t.equal(typeof spy, 'function');

    t.end();
});

test('spy returns the same value as the argument function', function(t){
    var spy = espionage.spyOn(add5);

    t.equal(spy(2), add5(2));

    t.end();
});

test('spy#callCount returns the number of times a function has been called', function(t){
    var spy = espionage.spyOn(add5)

    spy();
    spy();

    t.equal(spy.callCount(), 2);

    t.end();
});

test('spy#wasCalled returns true when the spy has been called', function(t){
    var spy = espionage.spyOn(add5);

    spy();

    t.equal(spy.wasCalled(), true);

    t.end();
});

test('spy#wasCalled returns false when the spy has not been called', function(t){
    var spy = espionage.spyOn(add5);

    t.equal(spy.wasCalled(), false);

    t.end();
});

test('spy#wasCalledWith returns true when the spy was called with the given value', function(t){
    var spy = espionage.spyOn(add5);
    var arg = 4;

    spy(arg);

    t.equal(spy.wasCalledWith(arg), true);

    t.end();
});

test('spy#wasCalledWith returns false when the spy was not called with the given value', function(t){
    var spy = espionage.spyOn(add5);

    spy();

    t.equal(spy.wasCalledWith(4), false);

    t.end();
});

test('spy#returned returns true when the spy has returned the given value', function(t){
    var spy = espionage.spyOn(add5);

    var returnVal = spy(5);
    spy(4);
    spy(3);
    spy(2);
    spy(1);

    t.equal(spy.returned(returnVal), true);

    t.end();
});

test('spy#returned returns false when the spy has not returned the given value', function(t){
    var spy = espionage.spyOn(add5);

    spy(2);
    spy(1);

    t.equal(spy.returned(3), false);

    t.end();
});
