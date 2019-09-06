//index.js
//获取应用实例
const app = getApp();
// import until from "../../utils/util.js";
// import http from "../../common/js/http.js";
let timers = null;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 0,
    ads: [],
    row: {},
    page: 1,
    logsList: [
        "亲，观看视频可获得代金券哦11~",
        "亲，观看视频可获得代金券哦11~",
        "亲，观看视频可获得代金券哦11~",
        "亲，观看视频可获得代金券哦11~",
        "亲，观看视频可获得代金券哦11~",
        "亲，观看视频可获得代金券哦11~",
        "亲，观看视频可获得代金券哦11~",
        "亲，观看视频可获得代金券哦11~",
        "亲，观看视频可获得代金券哦11~",
        "亲，观看视频可获得代金券哦11~",
        "亲，观看视频可获得代金券哦11~"
    ],
    height: 0,
    isDownRefresh: true
  },
  getLogs() {
    // 广告获得奖励列表
    if (!this.data.isDownRefresh) {
      this.setData({
        logsList: [...this.data.logsList, ...this.data.logsList]
      })
      return false;
    }
    // http.getReq('/advert/jifen_logs', {
    //   page: this.data.page,
    // }).then(res => {
    //   this.setData({
    //     logsList: [...this.data.logsList, ...res.data.data]
    //   })
    //   if (res.data.last_page == this.data.page) {
    //     this.setData({
    //       isDownRefresh: false,
    //     })
    //   } else {
    //     let page = this.data.page + 1;
    //     this.setData({
    //       page: page
    //     })
    //   }
    // })
  },
  getIndex() {
    // 广告首页
    http.getReq('/advert/index', {
      user_id: 0
    }).then(res => {
      this.setData({
        ads: res.data.ads,
        row: res.data.row,
      })
    })
  },
  alert(e) {
    console.log(e)
  },
  toRouter(e) {
    console.log(1)
    let data = until.cutShift(e.currentTarget.dataset);
    if (data) {
      wx.navigateTo({
        url: `${e.currentTarget.dataset.path}?${data}`,
      })
    } else {
      wx.navigateTo({
        url: e.currentTarget.dataset.path,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    this.getIndex()
    this.getLogs()
    wx.getSystemInfo({
      success: function(res) {
        let clientHeight = res.windowHeight;
        let clientWidth = res.windowWidth;
        let ratio = 750 / clientWidth;
        let height = clientHeight * ratio;
        that.setData({
          height: height
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
      scrollTop: 0
    })
    timers = setInterval(() => {
      this.setData({
        scrollTop: this.data.scrollTop + 1
      })
    }, 100)
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },
    click(){
        console.log('111')
    },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    clearInterval(timers)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    clearInterval(timers)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})