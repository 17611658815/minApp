Page({
  data: {
    isShow:false,//使用说明
      currentTab:0,
      navList: ['未使用', '已使用', '已过期'],
  },
  onLoad() {},
   // 导航tab切换
  swatchTab(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      currentTab: index
    })
  },
  shadeShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  }
});
