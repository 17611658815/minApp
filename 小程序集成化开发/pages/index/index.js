//index.js
//获取应用实例
const utils = require('../../utils/util.js')
const app = getApp()
Page({
    data: {
        page: 1,
        iphonex:false,
        // 自定义导航参数
        nvabarData: {
            showCapsule: 0,
            title: '我的主页',
        },

    },
    onLoad: function() {
        if (utils.isiPhoneX()) {
            this.data.iphonex = utils.isiPhoneX()
        }
        this.setData({
            iphonex: this.data.iphonex
        })
    },
   
})