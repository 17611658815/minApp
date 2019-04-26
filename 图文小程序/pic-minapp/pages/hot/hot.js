//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    slider: [],
    page:1,
    isHide: 'none',
    off_on: false,
  },
  onLoad: function () {
     var that = this
    that.loadList()
  },
  onReachBottom() {
    var that = this
    that.data.page++
    that.loadList()
  },
  loadList() {
    var that = this
    var off_on = that.data.off_on
    if (off_on == true) {
      return
    }
    off_on = true
    that.loadingShow()
    wx.request({
      url: 'https://qqgr.866691.com/category.json?num=10&page=' + that.data.page,
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      success: function (res) {
        that.loadingHide()
        if (res.data.data.length > 0) {
          for (var i = 0; i < res.data.data.length; i++) {
            that.data.slider.push(res.data.data[i])
          }
          that.setData({
            slider: that.data.slider.reverse(),
            off_on: false
          })
        } else {
          that.setData({
            isHide: 'none',
            off_on: true
          })
        }
      }
    })
  },
  loadingShow() {
    var that = this
    that.setData({
      isHide: 'block',
    })
  },
  loadingHide() {
    var that = this
    that.setData({
      isHide: 'none',
    })
  },
  gocontent(e) {
    var that = this
    console.log(e)
    var id = e.currentTarget.dataset.id
    var title = e.currentTarget.dataset.title
    wx.navigateTo({
      url: '../../pages/content/content?id=' + id + '&title=' + title,
    })
  },
  gohotList() {
    var that = this
    wx.redirectTo({
      url: '../../pages/hot/hot',
    })
  },
  goindex() {
    var that = this
    wx.redirectTo({
      url: '../../pages/index/index',
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage: function () {
    var that = this;
    return {
      title: "来福图文",
      path: '/pages/hot/hot',
    }
  },
})



