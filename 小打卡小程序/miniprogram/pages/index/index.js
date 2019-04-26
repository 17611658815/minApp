var start_clientX;
var end_clientX;
const app = getApp()
Page({
  data: {
    slider: [{
        picUrl: '../../images/icon-swiper1.jpg'
      },
      {
        picUrl: '../../images/icon-swiper2.jpg'
      },
      {
        picUrl: '../../images/icon-swiper3.jpeg'
      },
      {
        picUrl: '../../images/icon-swiper4.jpg'
      },
    ],
    windowHeight: "",
    windowWidth: "",
    swiperCurrent: 0,
    autoplay: true,
    interval: 5000,
    duration: 500,
    windowWidth: wx.getSystemInfoSync().windowWidth
  },
  // 滑动开始
  touchstart: function(e) {
    start_clientX = e.changedTouches[0].clientX
  },
  // 滑动结束
  touchend: function(e) {
    end_clientX = e.changedTouches[0].clientX;
    if (end_clientX - start_clientX > 150) {
      this.setData({
        display: "block",
        autoplay: false,
        translate: 'transform: translateX(' + this.data.windowWidth * 0.4 + 'px);'
      })
    } else if (start_clientX - end_clientX > 0) {
      this.setData({
        display: "none",
        translate: '',
        autoplay: true
      })
    }
  },
  // 头像
  showview: function() {
    this.setData({
      display: "block",
      autoplay: false,
      translate: 'transform: translateX(' + this.data.windowWidth * 0.4 + 'px);'
    })
  },
  // 遮拦
  hideview: function() {
    this.setData({
      display: "none",
      translate: '',
      autoplay: true
    })
  },
  fn(e) {
    this.setData({
      swiperCurrent: e.currentTarget.dataset.i
    })
    console.log(e)
  },
  swiperChange: function(e) {
    // console.log(e)
    this.setData({
      swiperCurrent: e.detail.current
    })
  },


})