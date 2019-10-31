const app = getApp()
Page({
  data: {
    isIphoneX: false,
    current: 0
  },
  onLoad() {
     this.setData({
      isIphoneX:app.globalData.isIphoneX 
    })   
  },
  swatchTab(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      current: index
    })
  },
  goback() {
    my.navigateBack({
      delta: 1
    });
  },
  alert() {
    my.alert({
      title: '亲',
      content: '您本月的账单已出',
      buttonText: '我知道了',
      success: () => {
        my.alert({
          title: '用户点击了「我知道了」',
        });
      }
    });
  },
});
