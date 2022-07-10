/**
 * @abstract
 * @class TaxCalculator
 */
class TaxCalculator {
    /**
     * @protected
     * @param {function[]} functionsToCall
     */
    callInOrder(functionsToCall) {
        functionsToCall.forEach(func => func.call(this));
    }

    /**
     * @protected
     * @param {function[]} functionsToCall
     */
    callInReverseOrder(functionsToCall) {
        functionsToCall.reverse().forEach(func => func.call(this));
    }
}

export default TaxCalculator;
