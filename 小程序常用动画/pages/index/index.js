//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    widthScreen: null,
    moveData: null,
    rotateData: null,
    alphaData: null,
    scaleData: null,
    skewData: null,
    matrixData: null
  },
  
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          widthScreen: res.screenWidth
        })
      },
    })
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

  moveClick: function () {
     this.animation = wx.createAnimation({
      duration: 3000,
      delay: 0,
      timingFunction: "ease",
    });
                                    //X方向 , Y方向
    this.animation.translate((this.data.widthScreen - 60), 60).step({ duration: 3000 })
    this.setData({ moveData: this.animation.export() })
    
  },

  rotateClick: function (even) {
    var animation = wx.createAnimation({})
    animation.rotate(180).step({ duration: 3000 })
    this.setData({ rotateData: animation.export() })

  },

  alphaClick: function (even) {
    var animation = wx.createAnimation({})
    animation.opacity(0.1).step({ duration: 2000 })
    this.setData({ alphaData: animation.export() })
  },

  scaleClick: function (even) {
    var animation = wx.createAnimation({})
    animation.scale(1.6).step({ duration: 2000 })
    this.setData({ scaleData: animation.export() })
  },

  skewClick: function (even) {
    var animation = wx.createAnimation({})
    animation.skew(160).step({ duration: 2000 })
    this.setData({ skewData: animation.export() })
  },

  matrixClick: function (even) {
    var animation = wx.createAnimation({})
    animation.matrix(1, 3, 4, 5, 2, 2).step({ duration: 2000 })
    this.setData({ matrixData: animation.export() })
  },

  queueClick: function () {
    var animation = wx.createAnimation({});
    animation.translate((this.data.widthScreen - 60), 0).scale(0.3).opacity(0.5).step({ duration: 3000 })
    this.setData({ queueData: animation.export() })
  },
  reset: function () {
    //重置
    this.animation.rotate(0, 0).scale(1).translate(0, 0).skew(0, 0).step({ duration: 3000 })
    this.setData({
      moveData: this.animation.export(),
    })
  }

})
