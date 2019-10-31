Page({
  data: {},
  onLoad() {},
  goOtherList(){
    my.navigateTo({
      url:'/pages/other/other'
    });
  },
  goIndex(){
   my.switchTab({
     url: '/pages/index/index', // 跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面）。注意：路径后不能带参数
   });
  }
});
