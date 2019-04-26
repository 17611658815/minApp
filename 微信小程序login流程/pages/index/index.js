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
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function () {
    var that = this;
    var code;
    wx.login({
      success: function (res) {
        code = res.code
        that.getOpenId(code)
        wx.getUserInfo({
          success: function (res) {
            wx.setStorage({ key: 'userInfo', data: res.userInfo, })
            that.setData({
              userInfo: res.userInfo,
              hasUserInfo:true
            })
          }
        })
      },
    })
  },

  getOpenId(code) {
    var that = this
    var appid = "wx09475e1c13deb589";
    var secret = 'ae4756409281cb39c2aac0d7521ad479';
    var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&grant_type=authorization_code&js_code=' + code;
    wx.request({
      url: 'https://api.mfk.com/app/api/commom.php?para=' + encodeURIComponent(url),
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        //获取openId
        console.log(res)
      },
      fail: function (res) {
        console.log(res)
      }
    });
  },
  godetails() {
    var that = this
    wx.navigateTo({
      url: '../details/details'
    })
  }

})
