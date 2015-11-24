# Espionage 
![](https://travis-ci.org/sterlingw/espionage.svg?branch=master)
[![Dependency Status](https://david-dm.org/sterlingw/espionage.svg)](https://david-dm.org/sterlingw/espionage)

Standalone library for creating spies in Node.js. Easy to use. No dependancies.

```
npm install espionage
```

# Usage
Espionage exports two functions for creating spies.

## `espionage.spyOn`
Accepts a function. Returns a spy. When called, the returned spy returns the same value as the given function.
```
var espionage = require('espionage');

function add5(num) {
  return num + 5;
}

var spy = espionage.spyOn(add5); // returns a spy
```

## `espionage.createSpy`
Doesn't accept arguments. Returns a spy. The spy returns undefined.
```
var espionage = require('espionage');

var spy = espionage.createSpy(); // returns a spy
```

## Spies
The functions `espionage.spyOn()` and `espionage.createSpy` both return a spy. Spies have these methods:

### `spy.callCount`
Doesn't accept arguments. Returns the number of times the spy has been called.

### `spy.wasCalled`
Doesn't accept arguments. Returns a boolean indicating if the spy has been called.

### `spy.wasCalledWith`
Accepts a single argument. Returns a boolean indicating if the spy has been called with the given argument.

### `spy.returned`
Accepts a single argument. Returns a boolean indicating if the spy has been called with the given argument.

# Running tests
`npm test`

# License
MIT. Copyright (c) [Sterling Whitley](http://sterlingw.com)
