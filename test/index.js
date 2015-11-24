var test = require('tape');
var espionage = require('../index.js');

test('espionage has methods spyOn and createSpy', function(t){
    t.equal(typeof espionage.spyOn, 'function');
    t.equal(typeof espionage.createSpy, 'function');
    t.end();
});
