// components/start/start.js
import {
    postRequest,
    getRequest
} from '../../utils/request.js';
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        show: { // 属性名
            type: Boolean,
            value: {},
            observer: function(newVal, oldVal, changedPath) {
                // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
                // 通常 newVal 就是新设置的数据， oldVal 是旧数据
                this.data.show = newVal;
            }
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        show: false,
        openid: '',
        unionid: '',
        sessionKey: '',
    },


    ready() {
        console.log(getCurrentPages());
    },

    /**
     * 组件的方法列表
     */

    methods: {
        // 触发注册按钮获取手机号
        getPhoneNumber(e) {
            // const { formId } = e.detail.formId;
            var that = this;
            // 验证用户当前的session_key是否有效
            wx.checkSession({
                success: res => {
                    // if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {

                    if (!e.detail.encryptedData) {
                        wx.showModal({
                            title: '提示',
                            showCancel: false,
                            content: '未授权',
                            success: function(res) {}
                        })
                    } else {
                        let sessionKey = wx.getStorageSync('sessionKey');
                        let unionid = wx.getStorageSync('unionid');
                        let openid = wx.getStorageSync('openid');
                        let iv = e.detail.iv;
                        let encryptedData = e.detail.encryptedData;
                        let dataAll = {
                            session_key: sessionKey,
                            iv: iv,
                            encrypted: encryptedData
                        };
                        let data = {
                            openid: openid,
                            unionid: unionid,
                            iphone: dataAll,
                            // formId: formId
                        };

                        // 调取小程序登录接口判断是否注册
                        postRequest("user/registered", data).then(res => {
                            wx.showModal({
                                title: '提示',
                                showCancel: false,
                                content: '注册成功！',
                                success: function() {
                                    if (res.data.code == 0) {
                                        wx.setStorageSync('token', res.data.data)
                                        that.showView();
                                    }
                                }
                            })

                        })
                    }
                },
                fail: res => {
                    console.log(res)
                    // 跳转登录
                }
            })
        },

        // 判断是否显示一键注册页面
        showView() {
            let pages = getCurrentPages() //获取加载的页面
            let currentPage = pages[pages.length - 1]; // pages/index/index
            let url = currentPage.route;
            let tabIndex = currentPage.options.tabIndex //页面url

            if (url == "pages/index/index") {
                if (tabIndex) {
                    wx.navigateBack({
                        delta: 1 // 返回的页数
                    })
                } else {
                    this.triggerEvent('showView', true);
                }
            } else {
                wx.navigateBack({
                    delta: 1
                })
            }
        }
    }
})