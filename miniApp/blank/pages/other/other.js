Page({
  data: {
      currentTab:0,
      navList: ['进行中', '已完结', '已经取消'],
      dataList:[1,2,3,4,5]
      // dataList:[]
  },
  onLoad() {},
   // 导航tab切换
  swatchTab(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      currentTab: index
    })
  },
  // 买断
  gobuy(){
    my.navigateTo({
      url:'/pages/otherdetails/otherdetails'
    });
  },
  // 查看账单
  gobill(){
    my.navigateTo({
      url:'/pages/bill/bill'
    });
  },
  // 查看物流
  gologistics(){
    my.navigateTo({
      url:'/pages/logistics/logistics'
    });
  },
  // 
  goorderdetails2(){
    my.navigateTo({
      url:'/pages/orderdetails2/orderdetails2'
    });
  }
});
