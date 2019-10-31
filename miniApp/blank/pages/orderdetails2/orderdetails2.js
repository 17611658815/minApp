const app = getApp()
Page({
  data: {
    isIphoneX:false
  },
  onLoad() {
    this.setData({
      isIphoneX:app.globalData.isIphoneX 
    })   
  },
   
  comfirm() {
    my.confirm({
      title: '温馨提示',
      content: '你选择得商品即将售罄！确定要取消订单吗',
      confirmButtonText: '我在想想',
      cancelButtonText: '确定需要',
      success: (result) => {
            my.navigateTo({
                url:'/pages/delother/delother'
            });
      },
    });
  },
});
