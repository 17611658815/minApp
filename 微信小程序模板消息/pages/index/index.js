//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    appid:"wx09475e1c13deb589",
    secret:'6bdc7ba343481cc1fb9b3b993a76f181',
    _token:"",
    tmpID:'XiSVZf5YhSFMsMjn2h_73TgqXqYjdG03-FtUZmGYd4g',//模板id
    openID:''

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this

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
  //保存推送码
  formSubmit(e){
    var that = this
    var formId = e.detail.formId;
    that.collectFormIds(formId); 
    console.log(app.globalData.globalFormIds)
  },
  // 存储fromid
  collectFormIds: function (formId) {
    let formIds = app.globalData.globalFormIds; // 获取全局推送码数组
    if (!formIds)
      formIds = [];
    let data = {
      formId: formId,
      expire: new Date().getTime() + 60480000 // 7天后的过期时间戳 
    }
    formIds.push(data);
    app.globalData.globalFormIds = formIds;
  },
  sendMsg(e){
    var that = this
    var formId = e.detail.formId;
    console.log(formId)
    that.collectFormIds(formId); //保存推送码
    wx.request({ //获取token
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + that.data.appid + '&secret=' + that.data.secret,
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      success(res) {
        console.log(res)
        that.setData({
          _token: res.data.access_token
        })
        let url = 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + that.data._token;
        let _Data = {
          access_token: that.data._token,
          touser: that.data.openID,
          template_id: that.data.tmpID,
          form_id:formId,
          page: "pages/index/index",
          data: {
            "keyword1": { "value": "0123456", "color": "#000" },
            "keyword2": { "value": "99", "color": "#000" },
            "keyword3": { "value": "2018-11-15", "color": "#000" },
            "keyword4": { "value": "西瓜", "color": "#000" },
            "keyword5": { "value": "微信支付", "color": "#000" },
          }
        }
        wx.request({
          url: url,
          header: {
            'content-type': 'application/json'
          },
          data: _Data,
          method: "POST",
          success: function (res) {
            console.log(res)
          },
          fail: function (err) {
            console.log('request fail ', err);
          },
          complete: function (res) {
            console.log("request completed!");
          }

        })
      }
    })
   

  },
  getToken(){
    var that = this
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + that.data.appid + '&secret=' + that.data.secret,
      header: {
        'content-type': 'application/json'
      },
      method:"GET",
      success(res){
        console.log(res)
        that.setData({
          _token: res.data.access_token
        })
      }
    })
  }, 
  tempMessag(){
    var that = this
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token='+that.data._token,
      header: {
        'content-type': 'application/json'
      },
      data:{
         
      },
      method: "GET",
      success(res) {
        that.setData({
          _token: res.data.access_token
        })
      }
    })
  },
  fn(){
    console.log('11111111111111111111111')
  },
  getUserInfo: function () {
    var that = this;
    var code;
    wx.login({
      success: function (res) {
        code = res.code
        
        // that.getToken()
        that.getOpenId(code)
        wx.getUserInfo({
          success: function (res) {
            wx.setStorage({ key: 'userInfo', data: res.userInfo, })
            that.setData({
              userInfo: res.userInfo
            })
          }
        })
      },
    })
  },

  getOpenId(code) {
    var that = this
    var appid = "wx09475e1c13deb589";
    var secret = '6bdc7ba343481cc1fb9b3b993a76f181';
    var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&grant_type=authorization_code&js_code=' + code;
    wx.request({
      url: 'https://api.mfk.com/app/api/commom.php?para=' + encodeURIComponent(url),
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        //获取openId
        console.log(res.data.openid)
        that.setData({
          openID: res.data.openid
        })
      },
      fail: function (res) {
        console.log(res)
      }
    });
  },
})
