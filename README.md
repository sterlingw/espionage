# SimpleSpy.js 
![](https://travis-ci.org/sterlingw/SimpleSpy.js.svg?branch=master)
[![Dependency Status](https://david-dm.org/sterlingw/SimpleSpy.js.svg)](https://david-dm.org/sterlingw/SimpleSpy.js)
[![Coverage Status](https://coveralls.io/repos/sterlingw/SimpleSpy.js/badge.svg?branch=master&service=github)](https://coveralls.io/github/sterlingw/SimpleSpy.js?branch=master)

Standalone library for creating spies in Node.js. Easy to use. No dependancies.

```
npm install simplespy
```

# Usage
SimpleSpy exports a simple `spyOn` function that accepts a single function as a parameter and returns a spy. SimpleSpy does not modify the given function.

## `spyOn`
Accepts a function. Returns a spy.
``` js
var spyOn = require('simple-spy');

function add5(num) {
  return num + 5;
}

var spy = spyOn(add5); // create spy
```

## `callCount`
Doesn't accept arguments. Returns the number of times the spy has been called.
``` js
var spyOn = require('simple-spy');

function add5(num) {
  return num + 5;
}

var spy = spyOn(add5); // create spy

spy(2); // returns 7
spy(3) // returns 8


spy.callCount(); // returns 2
```

## `wasCalled`
Doesn't accept arguments. Returns a boolean indicating if the spy has been called.
``` js
var spyOn = require('simple-spy');

function add5(num) {
  return num + 5;
}

var spy = spyOn(add5); // create spy

spy(2); // returns 7
spy(3) // returns 8


spy.callCount(); // returns 2
spy.wasCalled(); // returns true
```

## `wasCalledWith`
Accepts a single argument. Returns a boolean indicating if the spy has been called with the given argument.
``` js
var spyOn = require('simple-spy');

function add5(num) {
  return num + 5;
}

var spy = spyOn(add5); // create spy

spy(2); // returns 7
spy(3) // returns 8


spy.callCount(); // returns 2
spy.wasCalled(); // returns true
spy.wasCalledWith(2); // returns true
```

## `returned`
Accepts a single argument. Returns a boolean indicating if the spy has been called with the given argument.
``` js
var spyOn = require('simple-spy');

function add5(num) {
  return num + 5;
}

var spy = spyOn(add5); // create spy

spy(2); // returns 7
spy(3) // returns 8


spy.callCount(); // returns 2
spy.wasCalled(); // returns true
spy.wasCalledWith(2); // returns true
spy.returned(7); // returns true
```

# Running tests
`npm test`

# License
MIT. Copyright (c) [Sterling Whitley](http://sterlingw.com)


