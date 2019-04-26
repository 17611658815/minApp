const app = getApp()

Page({
  data: {
    begin: '',
    end: '',
    date: null,
    clock: ''
  },

  formSubmit: function(e) { // console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.navigateTo({
      url: '../trains/trains?beginCity=' + e.detail.value.beginCity + "&endCity=" + e.detail.value.endCity + "&leaveDate=" + e.detail.value.leaveDate,
    })
  },
  formReset: function() {
    console.log('form发生了reset事件')
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  onLoad: function(options) {
    countdown(this);
    if (this.data.date == null || this.data.date.trim() == "") {
      var day = new Date()
      day.setTime(day.getTime() + 24 * 60 * 60 * 1000);
      var year = day.getFullYear(); //年
      var month = day.getMonth() + 1; //月
      var day = day.getDate(); //日

      if (month < 10) {
        month = "0" + month;
      }
      if (day < 10) {
        day = "0" + day;
      }
      this.setData({
        date: year + '-' + month + '-' + day
      })
    }
  },
  onPullDownRefresh: function() {
    wx.stopPullDownRefresh();
  },
  bindBeginCityView: function() {
    wx.navigateTo({
      url: '../citys/citys?cityType=begin',
    })
  },
  bindEndCityView: function() {
    wx.navigateTo({
      url: '../citys/citys?cityType=end',
    })
  },
  onShow: function() {
    this.setData({
      begin: app.globalData.trainBeginCity
    })
    this.setData({
      end: app.globalData.trainEndCity
    })
  }


})


// indes.js 倒计时
/** 
 * 需要一个目标日期，初始化时，先得出到当前时间还有剩余多少秒
 * 1.将秒数换成格式化输出为XX天XX小时XX分钟XX秒 XX
 * 2.提供一个时钟，每10ms运行一次，渲染时钟，再总ms数自减10
 * 3.剩余的秒次为零时，return，给出tips提示说，已经截止
 */

// // 定义一个总毫秒数，以一天为例
var total_micro_second = 3600 * 1000 * 24; //这是一天倒计时
// //这是10秒倒计时var total_micro_second = 10 * 1000;

// /* 毫秒级秒杀倒计时 */
function countdown(that) {
  // 渲染倒计时时钟
  that.setData({
    clock: dateformat(total_micro_second) //格式化时间
  });

  if (total_micro_second <= 0) {
    that.setData({
      clock: "秒杀结束"
    });
    // timeout则跳出递归
    return;
  }
  //settimeout实现倒计时效果
  setTimeout(function() {
    // 放在最后--
    total_micro_second -= 10;
    countdown(that);
  }, 10) //注意毫秒的步长受限于系统的时间频率，于是我们精确到0.01s即10ms
}

// 时间格式化输出，如1天天23时时12分分12秒秒12 。每10ms都会调用一次
function dateformat(micro_second) {
  // 总秒数
  var second = Math.floor(micro_second / 1000);
  // 天数
  var day = Math.floor(second / 3600 / 24);
  // 总小时
  var hr = Math.floor(second / 3600);
  // 小时位
  var hr2 = hr % 24;
  // 分钟位
  var min = Math.floor((second - hr * 3600) / 60);
  // 秒位
  var sec = (second - hr * 3600 - min * 60); // equal to => var sec = second % 60;
  // 毫秒位，保留2位
  var micro_sec = Math.floor((micro_second % 1000) / 10);
  return hr2 + "时" + min + "分" + sec + "秒" + micro_sec;
}

// Page({
//   data: {
//     clock: ''
//   },
//   onLoad: function() {
//     countdown(this);
//   }
// });


// const backgroundAudioManager = wx.getBackgroundAudioManager()

// backgroundAudioManager.title = '此时此刻'
// backgroundAudioManager.epname = '此时此刻'
// backgroundAudioManager.singer = '许巍'
// backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
// // 设置了 src 之后会自动播放
// backgroundAudioManager.src = 'http://pic.39yst.com/group1/M00/3E/91/Pb832lwtfdOAGtU9AALcM7wOncw877.mp3'