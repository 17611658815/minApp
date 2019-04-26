//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
    userInfo: {
      hasUserInfo: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      motto: 'Hello World',
      state: false,
      first_click: false,
    },
    
  },
  onLoad(){
    this.animation = wx.createAnimation({ duration: 2000, timingFunction: 'ease', })
  },
  set(){
    // wx.setStorage({
    //   key: 'phone',
    //   data: 17611658815,
    //   success(res) {
    //     console.log(res)
    //   }
    // })
    
  },
  set2() {
    wx.setStorage({
      key: 'phone',
      data: this.data.userInfo,
      success(res) {
        console.log(res)
      }
    })
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  translate: function () {
    this.animation = wx.createAnimation({ duration: 3000, timingFunction: 'ease', })
    var systemInfo = wx.getSystemInfoSync();
    console.log(systemInfo.windowWidth); // 输出 414 （单位 px）
    this.animation.translateY(1500 / 750 * systemInfo.windowWidth).step()
    this.setData({ animation: this.animation.export() })
  },
  translate2: function () {
    this.animation = wx.createAnimation({ duration: 3000, timingFunction: 'ease', })
    var systemInfo = wx.getSystemInfoSync();
    console.log(systemInfo.windowWidth); // 输出 414 （单位 px）
    this.animation.translateY(-1500 / 750 * systemInfo.windowWidth).step()
    this.setData({ animation: this.animation.export() })
  },
  reset: function () {
    this.animation.rotate(0, 0).translateY(0, 0).step({ duration: 0 })
    this.setData({
      animation: this.animation.export(),
    })

  },

  // 下拉
  toggle: function () {
    var list_state = this.data.state,
      first_state = this.data.first_click;
    if (!first_state) {
      this.setData({
        first_click: true
      });
    }
    if (list_state) {
      this.setData({
        state: false
      });
    } else {
      this.setData({
        state: true
      });
    }
  }

})


