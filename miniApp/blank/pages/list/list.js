Page({
  data: {
     scrollLeft: 0,
        currentTab:0,
        isIphoneX:false,
        navArr: [
            { name: '全部商品' }, 
            { name: '优选苹果' }, 
            { name: '全新苹果' }, 
            { name: '安卓手机' }, 
            { name: '平板电脑' }, 
            { name: '游戏趣玩' }]
  },
  onLoad(option) {
    console.log(option)
  },
      // 获取元素位置
    handleScroll(selectedId) {
        var that = this;
        var query = my.createSelectorQuery();//创建节点查询器
        query.select('#item-' + selectedId).boundingClientRect();//选择id='#item-' + selectedId的节点，获取节点位置信息的查询请求
        query.select('#scroll-view').boundingClientRect();//获取滑块的位置信息
        //获取滚动位置
        query.select('#scroll-view').scrollOffset();//获取页面滑动位置的查询请求
        query.exec(function (res) {
            console.log("res:", res)
            that.setData({
                scrollLeft: res[2].scrollLeft + res[0].left + res[0].width / 2 - res[1].width / 2
            });
            console.log(that.data.scrollLeft)
        });
    },
    // 导航tab切换
    swatchTab(e) {
        let index = e.currentTarget.dataset.index;
        this.handleScroll(index)
        this.setData({
            currentTab: index
        })
    },
      goGoodsDetails(){
    my.navigateTo({
       url: '/pages/details/details'
    });
  },
});
