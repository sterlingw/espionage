var spyOn = require('./spyOn');

/**
 * @return {function} spy
 */
module.exports = function createSpy() {
    return spyOn(function(){});
}
