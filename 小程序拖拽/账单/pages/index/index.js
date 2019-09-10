//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js');
Page({
  data: {
    setting:{
      show_ad : 0
    },
    showEmpower:0,
    showPower: 0,
    iconColor:[
      '#666', '#666', '#666', '#666', '#666', '#666', '#666', '#666', '#666', '#666'
    ],


    writePosition: [90, 90],
    writesize:[0, 0],
    window: [0, 0],
    write: [0, 0],
    scrolltop:0
  },
  onLoad: function () {
    for (var i = 0; i < this.data.iconColor.length;i++){
      this.data.iconColor[i] = util.getRandomColor();
    }
    this.setData({
      iconColor: this.data.iconColor
    });
    this.getSysdata();
    this.chekeLocalData();
  },
  //获取系统参数
  getSysdata:function(){
    var that = this;
    wx.getSystemInfo({
      success:function(e){
        that.data.window = [e.windowWidth, e.windowHeight];
        var write = [];
        write[0] = that.data.window[0] * that.data.writePosition[0] / 100;
        write[1] = that.data.window[1] * that.data.writePosition[1] / 100;
        that.setData({
          write: write
        },function(){
            // 获取元素宽高
          wx.createSelectorQuery().select('.pushbill').boundingClientRect(function (res) {
            console.log(res)
            that.data.writesize = [res.width, res.height];
          }).exec();
        })
      },
      fail: function (e) {
        console.log(e)
      }
    });
  },
  //检测本地数据，并同步
  chekeLocalData:function(){
    console.log('执行index.chekeLocalData');
    var data = {};
    var outContentTag = wx.getStorageSync('inContentTag') || '';
    if (outContentTag != '') {
      data.outContentTag = outContentTag;
    }
    var inContentTag = wx.getStorageSync('inContentTag') || '';
    if (inContentTag != '') {
      data.inContentTag = inContentTag;
    }
    var dayOut = wx.getStorageSync('dayOut') || '';
    if (dayOut != '') {
      data.dayOut = dayOut;
    }
    var dayIn = wx.getStorageSync('dayIn') || '';
    if (dayIn != '') {
      data.dayIn = dayIn;
    }
    console.log('缓存数据', data);
    if (data.outContentTag != undefined || data.inContentTag != undefined || data.dayOut != undefined || data.dayIn != undefined){
      console.log('执行app.synchroData');
      app.synchroData(data);
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    app.wxLogin(function () {
      that.setData({
        showEmpower: 0
      });
    });
  },
  userLogin: function(e){
    if (e.detail.authSetting['scope.userInfo']){
      wx.getUserInfo({
        lang:'zh_CN',
        success:function(res){
          app.globalData.userInfo = res.userInfo;
          app.wxLogin(function(){
            that.setData({
              showPower:0
            });
          });
        },
        fail: function (res) {
          console.log(res)
        },
        complete: function (res) {
        },
      })
    }else{
      app.alert('请授权用户信息');
    }
  },
  //开始拖拽   
  touchmove:function(e){
    var that = this;
    var position = [e.touches[0].pageX + that.data.writesize[0] / 2, e.touches[0].pageY + that.data.writesize[1] / 2 - this.data.scrolltop];
    that.setData({
      write: position
    });
  },
  onPageScroll(e) {
    this.data.scrolltop = e.scrollTop;
  }
})
