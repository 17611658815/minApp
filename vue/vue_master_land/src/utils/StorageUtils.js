export default {

    /**
     * 添加String Json数据
     * @param key
     * @param value
     */
    setJsonData(key, value) {    // watch所监听的函数名称
        window.localStorage.setItem(key, JSON.stringify(value));
    },

    /**
     * 获取String Json数据
     * @param key
     * @param value
     */
    getJsonData(key) {
        return JSON.parse(window.localStorage.getItem(key) || '[]')
    },

    /**
     * 添加String 数据
     * @param key
     * @param value
     */
    setStringData(key, value) {    // watch所监听的函数名称
        window.localStorage.setItem(key, value);
    },

    /**
     * 获取String 数据
     * @param key
     * @param value
     */
    getStringData(key) {
        return window.localStorage.getItem(key) || '[]'
    },

    /**
     * 删除对应key存储的数据
     * @param key
     */
    removeItemData(key) {
        return window.localStorage.removeItem(key)
    },

    /**
     * 删除所有数据
     * @param key
     */
    removeAllData() {
        return window.localStorage.clear()
    },


}
