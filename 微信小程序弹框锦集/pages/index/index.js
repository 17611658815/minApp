//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  alert1(){
    wx.showToast({
      title: '弹窗1',
      icon: 'none',
      duration: 2000
    })
  },
  alert1() {
    wx.showToast({
      title: '弹窗1',
      icon: 'none',
      duration: 2000
    })
  },
  alert2() {
    wx.showModal({
      title: '提示',
      content: '11111',
      showCancel: false,
      complete: function () {
        // wx.navigateBack({});
        console.log('1111111')
      }
    });
  },
  alert3() {
    wx.showModal({
      title: '提交成功！',
      content: '内容审核预计1~3个工作日,请您耐心等待审核结果~',
      confirmText: '继续回答',
      confirmColor: '#333333',
      cancelText: '立即查看',
      cancelColor: '#666666',
      success: function (res) {
        if (res.confirm) {
          console.log('继续回答')
        } else if (res.cancel) {
          console.log('立即查看');
         
        }
      }
    })
  },
  alert4() {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 2000
    })
  },
  alert5() {
    wx.showToast({
      title: '加载中',
      // icon: 'success',
      image:'../../images/checked.png',
      duration: 2000
    })
  },
  alert6() {
    wx.showToast({
      title: '加载中',
      icon: 'success',
      duration: 2000
    })
  },
  alert7() {
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  }
})
