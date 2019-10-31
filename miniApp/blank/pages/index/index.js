Page({
  data: {
    bannerArr:['../../images/icon/mate20X5G.jpg','../../images/icon/nova5Pro.jpg'],
  
    navArr:[{
      path:'',
      name:'优选苹果',
      icon:'../../images/icon/1.png'
    },{
      path:'',
      name:'全新苹果',
      icon:'../../images/icon/2.png'
    },{
      path:'',
      name:'安卓手机',
      icon:'../../images/icon/3.png'
    },{
      path:'',
      name:'平板电脑',
      icon:'../../images/icon/4.png'
    },{
      path:'',
      name:'游戏趣玩',
      icon:'../../images/icon/5.png'
    }],
  },
  goGoodsDetails(){
    my.navigateTo({
       url: '/pages/details/details'
    });
  },
  goList(e){
    my.switchTab({
      url: '/pages/list/list'
    })
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
