//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    // touchStart: function(e) {
    //     console.log(e.timeStamp + '- touch start')
    // },
    // mytouchend: function(e) {
    //     console.log(e.timeStamp + '- touch end')
    // },
    // mytap(e) {
    //     console.log(e.timeStamp + '- tap')
    // }
    longTap: function (e) {
        console.log("long tap")
        wx.showModal({
            title: '提示',
            content: '长按事件被触发',
            showCancel: false
        })
    },
    touchStart: function (e) {
        console.log(e.timeStamp + '- touch start')
    },
    mytouchend: function (e) {
        console.log(e.timeStamp + '- touch end')
    },
    mytap(e) {
        console.log(e.timeStamp + '- tap 抬起')
    }
})