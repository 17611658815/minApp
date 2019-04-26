export default class LogUtils {
    static #isDebug = true;

    static jsonLog(data) {
        if (this.#isDebug) {
            var parse = JSON.stringify(data);
            console.log(parse)
        }
    }

    static log(str) {
        if (this.#isDebug) {
            console.log(str)
        }
    }
}