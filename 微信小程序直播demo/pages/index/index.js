Page({
  onLoad(){
    this.checkauth()
  },
  onReady(res) {
    this.ctx = wx.createLivePusherContext('pusher')
  },
  statechange(e) {
    console.log('live-pusher code:', e.detail.code)
  },
  //检查授权
  checkauth: function () {
    var that = this;
    console.log('授权')
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.record']) {
          wx.showModal({
            title: '提示',
            content: '录音功能需要您的授权',
            success: function (res) {
              if (res.confirm) {
                wx.authorize({
                  scope: "scope.record",
                  success: function (res) {
                    that.data.hasauth = true;
                    console.log('chenggong')
                    console.log(res)
                  },
                  fail: function (res) {
                    that.data.hasauth = false;
                    if (res.errMsg == 'authorize:fail auth deny') { //用户拒绝授权，需删除小程序重新进入授权
                      app.alert('您已拒绝授权录音功能，重新授权需删除小程序重新打开授权');
                    }
                  },
                  complete: function (res) {
                    console.log('complete')
                  },
                });
              } else if (res.cancel) { //拒绝授权退回列表
                console.log('back')
                wx.navigateBack({
                  delta: 1
                })
              }
            }
          })
        } else {
          that.data.hasauth = true;
        }
      }
    })
  },
  bindStart() {
    this.ctx.start({
      success: res => {
        console.log('start success')
      },
      fail: res => {
        console.log('start fail')
      }
    })
  },
  bindPause() {
    this.ctx.pause({
      success: res => {
        console.log('pause success')
      },
      fail: res => {
        console.log('pause fail')
      }
    })
  },
  bindStop() {
    this.ctx.stop({
      success: res => {
        console.log('stop success')
      },
      fail: res => {
        console.log('stop fail')
      }
    })
  },
  bindResume() {
    this.ctx.resume({
      success: res => {
        console.log('resume success')
      },
      fail: res => {
        console.log('resume fail')
      }
    })
  },
  bindSwitchCamera() {
    this.ctx.switchCamera({
      success: res => {
        console.log('switchCamera success')
      },
      fail: res => {
        console.log('switchCamera fail')
      }
    })
  }
})