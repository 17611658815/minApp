//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    arr:[1,2,3,4,5,6,7,8,9]
  },
 
  onLoad: function () {
    
  },
  alertIndex(e){
    console.log(e)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
