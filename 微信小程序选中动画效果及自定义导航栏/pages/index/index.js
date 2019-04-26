//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    taber:['tab1','tab2','tab3'],
    tab:0,
    
    nvabarData: {
      showCapsule: 0, 
      title: '我的主页', 
    },
    height: app.globalData.height * 2 + 20,   
      iphonex:false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
      var that = this;
      wx.getSystemInfo({
          success: (res) => {
            if (res.model.search('iPhone X') != -1) {
                console.log('iPhone X')
                that.setData({
                    iphonex: true
                })
            }
          }
      })
      console.log(that.data.iphonex)
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
  tabs(e){
    this.setData({
      tab: e.currentTarget.dataset.index
    })
    console.log(e)
  },
  gopage1(){
    wx.navigateTo({
      url: '/pages/page1/page1',
    })
  }
})
