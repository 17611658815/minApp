export default class StringBuffer {

    constructor() {
        this.__strings__ = new Array;
        return this;
    }

    append = function (str) {
        this.__strings__.push(str);
        return this;
    };

    toString = function () {
        return this.__strings__.join("");
    };
}