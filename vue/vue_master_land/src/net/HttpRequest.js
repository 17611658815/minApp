import axios from 'axios';
import StringBuffer from "@/utils/StringBuffer";
import LogUtils from "@/utils/LogUtils";

axios.defaults.timeout = 15000;
// axios.defaults.baseURL = 'http://120.52.185.84/zhujianapp'; //填写域名

//http request 拦截器
axios.interceptors.request.use(
    config => {
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
            // 'Content-Type':' multipart/form-data'
            // 'Content-Type': 'application/json',
        }
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
    return response
}, err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                LogUtils.log('错误请求')
                break;
            case 401:
                LogUtils.log('未授权，请重新登录')
                break;
            case 403:
                LogUtils.log('拒绝访问')
                break;
            case 404:
                LogUtils.log('请求错误,未找到该资源')
                break;
            case 405:
                LogUtils.log('请求方法未允许')
                break;
            case 408:
                LogUtils.log('请求超时')
                break;
            case 500:
                LogUtils.log('服务器端出错')
                break;
            case 501:
                LogUtils.log('网络未实现')
                break;
            case 502:
                LogUtils.log('网络错误')
                break;
            case 503:
                LogUtils.log('服务不可用')
                break;
            case 504:
                LogUtils.log('网络超时')
                break;
            case 505:
                LogUtils.log('http版本不支持该请求')
                break;
            default:
                LogUtils.log(`连接错误${err.response.status}`)
        }
    } else {
        LogUtils.log('连接到服务器失败')
    }
    return Promise.resolve(err.response)
})


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function getRequest(url, params = {}) {
    LogUtils.log("url = " + url);
    LogUtils.log("params = " + params);
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function postRequest(url, data = {}) {
    LogUtils.log("url = " + url);
    let strBuffer = new StringBuffer();
    for (let param in data) {
        strBuffer.append(param + ":" + data[param] + "\n");
    }
    LogUtils.log("data = \n" + strBuffer.toString())

    return new Promise((resolve, reject) => {
        axios.post(url, data)
        // axios.post(url, JSON.stringify(data))
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}

// export function postRequest(url, data = {}) {
//     return new Promise((resolve, reject) => {
//         axios.post(url, qs.stringify(data))
//             .then(response => {
//                 resolve(response.data);
//             }, err => {
//                 reject(err)
//             })
//     })
// }

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}