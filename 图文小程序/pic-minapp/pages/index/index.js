//index.js
var util = require('../../utils/util.js');
const app = getApp()

Page({
  data: {
    slider: [],
    time: [],
    date: '',
    month:'',//月份
    isHide: 'none',
    animation: '',
    windowHeight: "",
    windowWidth: "",
    page: 1,
    off_on: false,
  },
  onLoad: function() {
    var that = this
    //获取当天日期
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    console.log("当前时间戳为：" + timestamp);
    var n = timestamp * 1000;
    var date = new Date(n);
    //年  
    var Y = date.getFullYear();
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    this.setData({
      time: Y + '年' + M + '月',
      date: D,
      month: M 
    })
    that.loadList()
  },
  // 上拉加载
  onReachBottom() {
    var that = this
    that.data.page++
    that.loadList()
  },
  // 初始化列表
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
      success: function(res) {
        that.loadingHide()
        if (res.data.data.length > 0) {
          for (var i = 0; i < res.data.data.length; i++) {
            that.data.slider.push(res.data.data[i])
          }
          that.setData({
            slider: that.data.slider,
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
  // 换一批
  upList() {
    var that = this
    that.showLoading()
    wx.request({
      url: 'https://qqgr.866691.com/category.json?num=10&type=rand',
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      success: function (res) {
        console.log(res)
        that.hideLoading()
        that.setData({
          slider: res.data.data,
          page:1
        })
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
  showLoading() {
    wx.showLoading({
      title: '加载中',
    })
  },
  hideLoading() {
    wx.hideLoading()
  },
  gohotList() {
    var that = this
    wx.redirectTo({
      url: '../../pages/hot/hot',
    })
  },
  gocollect() {
    var that = this
    wx.redirectTo({
      url: '../../pages/collect/collect',
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage: function() {
    var that = this;
    return {
      title: '来福图文',
      path: '/pages/index/index',
    }
  },
})