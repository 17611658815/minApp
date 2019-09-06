//app.js
App({
  //获取openid 并登陆，默认生成临时用户
  login: function () {
    var that = this;
    wx.login({
      success(res) {
        if (res.code) {
          //获取openid
          that.loading();
          wx.request({
            url: that.globalData.requestUrl + '/appInterface/user/getOpenId',
            method: 'POST',
            data: { appid: that.globalData.appid, code: res.code },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success: function (res) {
              console.log('获取openid', res);
              if (res.data.code == 200) {
                that.globalData.openid = res.data.openid;
                if (that.globalData.userInfo.id == undefined) {//生成临时用户
                  that.globalData.userInfo = {
                    avatarUrl: that.globalData.requestUrl + '/statics/images/coupon_logo.png',
                    nickName: '账单临时用户',
                    country: '',
                    province: '',
                    city: '',
                    gender: 1
                  }
                }
                that.wxLogin();
              } else {
                setTimeout(function () {
                  that.login();
                }, 3000);
              }
            },
            fail: function (res) {
              console.log('获取openid错误')
            },
            complete: function (res) {
              that.hideload();
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
  },
  //微信登陆
  wxLogin: function () {
    var that = this;
    if (arguments[0] != undefined) {
      that.globalData.callback = arguments[0];
    }
    that.loading();
    wx.request({
      url: that.globalData.requestUrl + '/appInterface/user/wxLogin',
      method: 'POST',
      data: {
        appid: that.globalData.appid,
        openid: that.globalData.openid,
        userInfo: that.globalData.userInfo
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log('用户微信登陆', res);
        if (res.data.code == 200) {
          that.globalData.userInfo = res.data.data;
          that.globalData.userInfo.cachetime = new Date().getTime();
          wx.setStorageSync('userinfo', res.data.data);
          if (that.globalData.callback != undefined && typeof (that.globalData.callback) == 'function') {
            console.log('用户微信登陆回调');
            that.globalData['callback']();
          }
        } else if (res.data.code == 500) {
          console.log(res.data.msg);
        } else {
          console.log('登陆失败，请重试');
        }
      },
      fail: function (res) {
        console.log('保存用户信息错误')
      },
      complete: function (res) {
        that.hideload();
      }
    })
  },
  //同步数据
  synchroData: function (data){
    var that = this;
    data.appid = that.globalData.appid;
    data.user_id = that.globalData.userInfo.id;
    if (!data.user_id){//没有用户id,回调登陆
      that.globalData.callback = that.synchroData;
      that.login();
    }
    console.log('用户信息', that.globalData.userInfo);
    that.loading();
    wx.request({
      url: that.globalData.requestUrl + '/appInterface/bill/synchroData',
      method: 'POST',
      data: data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log('数据同步成功', res);
        if (res.data.outContentTag==1){
          wx.removeStorageSync('outContentTag');
        }
        if (res.data.inContentTag == 1) {
          wx.removeStorageSync('inContentTag');
        }
        if (res.data.dayOut == 1) {
          wx.removeStorageSync('dayOut');
        }
        if (res.data.dayIn == 1) {
          wx.removeStorageSync('dayIn');
        }
        that.alert('数据同步成功');
      },
      fail: function (res) {
        console.log('数据同步失败')
      },
      complete: function (res) {
        that.hideload();
      }
    })
  },
  onLaunch: function (opt) {
    if(opt.sharefrom != undefined){
      this.globalData.sharefrom = opt.sharefrom;
    }
    var that = this;
    var userinfo = wx.getStorageSync('userinfo') || {};
    var nowtime = new Date().getTime();
    if (userinfo.id != undefined && (nowtime - userinfo.cachetime) < 3600000 * 24 * 7) {//存在用户信息,七天有效期内
      console.log(userinfo);
      that.globalData.userInfo = userinfo;
    } else {
      console.log('获取openid');
      that.login();//获取openid
    }
  },
  loading: function () {
    wx.showToast({
      icon: 'none',
      duration: 10000
    });
  },
  alert: function (msg, icon='none'){
    wx.showToast({
      title: msg,
      icon: icon,
      duration: 2000
    });
  },
  hideload: function () {
    wx.hideLoading()
  },
  hideAlert: function () {
    wx.hideToast();
  },
  globalData: {
    appid: 9,
    requestUrl: 'https://m.dodo.wiki',
    userInfo: {}
  }
})