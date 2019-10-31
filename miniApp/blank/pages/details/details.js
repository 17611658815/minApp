const app = getApp()
Page({
  data: {
     fined: false,//定位
    scrollTop:500,//据顶部距离
    falge: true, //勾选状态
    current_1: 0,  //内存
    current_2: 0,  //颜色
    current_3: 0,  //  租期
    selectShow: false,//选择商品规格
    isIphoneX: false,
    currentTab: 0,
    fixTop: 0,
    navList: ['推广概况', '搜索推广', '场景展示'],
    navArr: [
      { name: '全部商品' },
      { name: '优选苹果' },
      { name: '全新苹果' },
      { name: '安卓手机' },
      { name: '平板电脑' },
      { name: '游戏趣玩' }],
    bannerArr: ['../../images/icon/1.jpg', '../../images/icon/2.jpg', '../../images/icon/3.jpg'],
    textArr: [{ name: '商品如何买断？', checked: true },
    { name: '买断费用如何计算，什么时候买断比较划算', checked: false },
    { name: '租金如何计算&支付方式？', checked: false }, { name: '使用过程中出现请问划痕怎么办？', checked: false }],
      tabs: ['基础组件', '扩展组件'],
     titleOpacity: 1,
    shadow: false,
    top:0,
  },
  // onPageScroll: function(e) {
  //       var that = this;
  //       if (that.data.fixTop < e.scrollTop) {
         
  //           that.setData({
  //               fined: true,
  //               scrollTop: e.scrollTop
  //           })
  //            console.log(that.data.fined)
  //       } else {
  //           that.setData({
  //               fined: false,
  //               scrollTop: 0, //滑动条离顶部的距离
  //           })
  //             console.log(that.data.fined)
  //       }
  //   },
    onPageScroll(e) {
    const { scrollTop } = e;
    let titleOpacity = 1 - scrollTop * 0.02;
    let shadow = false;

    if (titleOpacity < 0) {
      titleOpacity = 0;
    }

    if (titleOpacity > 1) {
      titleOpacity = 1;
    }

    if (scrollTop > 80) {
      my.setNavigationBar({
        title: '小程序官方示例',
      });
    } else {
      my.setNavigationBar({
        title: ' ',
      });
    }

    if (scrollTop > 320) {
      shadow = true;
    } else {
      shadow = false;
    }

    this.setData({
      shadow,
      titleOpacity,
    });
  },
  onLoad() {
    
    this.setData({
      isIphoneX:app.globalData.isIphoneX 
    })   
  },
  // 导航tab切换
  swatchTab(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      currentTab: index
    })
  },
  checked(e) {
    let index = e.currentTarget.dataset.index;
    this.data.textArr.forEach((item, i) => {
      item.checked = false;
      if (index == i) {
        item.checked = !item.checked
      }
    })
    this.setData({
      textArr: this.data.textArr
    })
  },
  selectGood() {
    this.setData({
      selectShow: !this.data.selectShow
    })
  },
  // 选择内存
  change_1(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      current_1: index
    })
  },
  // 选择颜色 
  change_2(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      current_2: index
    })
  },
  // 选择租期
  change_3(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      current_3: index
    })
  },
  // 勾选手机保障服务
  selectCheckBox() {
    this.setData({
      falge: !this.data.falge
    })
  },
  //  返回首页
  goIndex() {
    my.switchTab({
      url: '/pages/index/index'
    })
  },
  //  查看更多
  gohelpCenter() {
    my.navigateTo({
      url: '/pages/helpCenter/helpCenter'
    });
  },
  //  去添加信息
  goaddres() {
    my.navigateTo({
      url: '/pages/addres/addres'
    });
  }
});
