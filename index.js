(function(){
    /**
     * @return {function} spy
     */
    module.exports = function spyOn(func) {
        var calls = 0,
            argumentVals = [],
            returnVals = [];

        /**
         * @return - the same return value of the given function
         */
        function spy(){
            var returnVal = func.apply(this, arguments);

            argumentVals = argumentVals.concat(Array.from(arguments));
            returnVals.push(returnVal);
            calls++;

            return returnVal;
        };

        /**
         * @return {number}
         */
        spy.callCount = function(){
            return calls;
        };

        /**
         * @return {boolean}
         */
        spy.wasCalled = function(){
            return returnVals.length > 0;
        };

        /**
         * @return {boolean}
         */
        spy.wasCalledWith = function(val) {
            return argumentVals.indexOf(val) > -1;
        };

        /**
         * @return {boolean}
         */
        spy.returned = function(val) {
            return returnVals.indexOf(val) > -1;
        };

        return spy;
    };
})();
