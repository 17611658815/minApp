Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 效果一
    msgList: [
      { url: "url", title: "多地首套房贷利率上浮 热点城市渐迎零折扣时代" },
      { url: "url", title: "交了20多年的国内漫游费将取消 你能省多少话费？" },
      { url: "url", title: "北大教工合唱团出国演出遇尴尬:被要求给他人伴唱" }
    ],
    // 效果二
    text: '这是一条会滚动的文字滚来滚去的文字跑马灯，哈哈哈哈哈哈哈哈',
    marqueePace: 1,//滚动速度
    marqueeDistance: 0,//初始滚动距离
    marqueeDistance2: 0,
    marquee2copy_status: false,
    marquee2_margin: 60,
    size: 14,
    orientation: 'left',//滚动方向
    interval: 20 // 时间间隔

  },
  // 效果二
  onShow: function () {
    // 页面显示
    var that = this;
    var length = that.data.text.length * that.data.size;//文字长度
    var windowWidth = wx.getSystemInfoSync().windowWidth;// 屏幕宽度
    that.setData({
      length: length,
      windowWidth: windowWidth,
      marquee2_margin: length < windowWidth ? windowWidth - length : that.data.marquee2_margin//当文字长度小于屏幕长度时，需要增加补白
    });
    that.run1();// 水平一行字滚动完了再按照原来的方向滚动
    that.run2();// 第一个字消失后立即从右边出现
  },
  run1: function () {
    var that = this;
    var interval = setInterval(function () {
      if (-that.data.marqueeDistance < that.data.length) {
        that.setData({
          marqueeDistance: that.data.marqueeDistance - that.data.marqueePace,
        });
      } else {
        clearInterval(interval);
        that.setData({
          marqueeDistance: that.data.windowWidth
        });
        that.run1();
      }
    }, that.data.interval);
  },
  run2: function () {
    var that = this;
    var interval = setInterval(function () {
      if (-that.data.marqueeDistance2 < that.data.length) {
        // 如果文字滚动到出现marquee2_margin=30px的白边，就接着显示
        that.setData({
          marqueeDistance2: that.data.marqueeDistance2 - that.data.marqueePace,
          marquee2copy_status: that.data.length + that.data.marqueeDistance2 <= that.data.windowWidth + that.data.marquee2_margin,
        });
      } else {
        if (-that.data.marqueeDistance2 >= that.data.marquee2_margin) { // 当第二条文字滚动到最左边时
          that.setData({
            marqueeDistance2: that.data.marquee2_margin // 直接重新滚动
          });
          clearInterval(interval);
          that.run2();
        } else {
          clearInterval(interval);
          that.setData({
            marqueeDistance2: -that.data.windowWidth
          });
          that.run2();
        }
      }
    }, that.data.interval);
  },

  onLoad: function (options) {

  },
 
})