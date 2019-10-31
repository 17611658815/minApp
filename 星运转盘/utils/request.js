/*
 * 
 * 封装微信请求
 */
import {
    getUrl
} from "./config.js"


//promise结果处理
function wxPromisify(fn) {
    return function (obj = {}) {
        return new Promise((resolve, reject) => {
            if (obj.url.indexOf("user/login") == -1
                && obj.url.indexOf("user/registered") == -1) {

                if (!wx.getStorageSync('token')) {
                    wx.showToast({
                        title: '请先注册会员',
                        icon: 'none',
                        duration: 1000,
                        mask: true,
                        success: function (res) {
                            wx.removeStorageSync('sessionKey');
                            wx.removeStorageSync('unionid');
                            wx.removeStorageSync('openid');
                            setTimeout(() => {
                                if (wx.getStorageSync('sessionKey') && wx.getStorageSync('openid')) {
                                    wx.navigateTo({
                                        url: '../index/index?tabIndex=2'
                                    })
                                } else {
                                    wx.navigateTo({
                                        url: '../index/index?tabIndex=2'
                                    })
                                }
                            }, 1000)
                        }
                    })
                    return;
                }
            }

            obj.success = function (res) {
                //成功
                if (res.data.code == -209) {
                    wx.removeStorageSync('token')
                    wx.showToast({
                        title: '登录信息过期，即将重新登录',
                        icon: 'none',
                        duration: 1000,
                        mask: true,
                        success: function (res) {
                            setTimeout(() => {
                                wx.redirectTo({
                                    url: '../index/index',
                                })
                            }, 1000)
                        }
                    })
                    return;
                } else {
                    //成功
                    resolve(res)
                }
            }
            obj.fail = function (res) {
                //失败
                reject(res)
            }
            fn(obj)
        })
    }
}
//无论promise对象最后状态如何都会执行
Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => {
            throw reason
        })
    );
};
//判断URL
function hostUrl(url) {
    return (url.indexOf("http") != -1) ? url : (getUrl() + url)
}

/**
 * 微信请求get方法
 * url
 * data 以对象的格式传入
 */
function getRequest(url, data = {}) {
    let getRequest = wxPromisify(wx.request)
    return getRequest({
        url: hostUrl(url),
        method: 'GET',
        data: data,
        header: {
            'Content-Type': 'application/json',
            'User-Token': wx.getStorageSync('token'),
        }
    })
}

/**
 * 微信请求post方法封装
 * url
 * data 以对象的格式传入
 */
function postRequest(url, data = {}) {
    let postRequest = wxPromisify(wx.request)
    return postRequest({
        url: hostUrl(url),
        method: 'POST',
        data: data,
        // 薛川的接口post都以json格式传
        header: {
            'Content-Type': 'application/json',
            'User-Token': wx.getStorageSync('token')
        }
    })
}

/**
 * 微信上传文件方法封装
 * url
 * fileData 以对象的格式传入
 */
function uploadFile(url, fileData = {
    key: 'file',
    path: ''
}, data = {}) {
    let uploadFile = wxPromisify(wx.uploadFile)
    return uploadFile({
        url: hostUrl(),
        filePath: fileData.path, //文件路径
        name: fileData.key, //文件参数名 
        formData: data //其他formData
    })
}

export {
    getRequest,
    postRequest,
    uploadFile
}