//index.js
//获取应用实例
const app = getApp()
let leftHeight = 0,
  rightHeight = 0; //分别定义左右两边的高度
let query;

Page({
  data: {
    navFixed: false,
    fixsxshow: false,
    fixjgshow: false,
    fixpxshow: false,
    fixdzshow: false,

    imgUrls: ['/images/banner.png', '/images/banner.png', '/images/banner.png'],
    list: [{
        sli: 1,
        src: "/images/sp1.png",
        h2: "早餐营养全麦网红食品小蛋糕糕点",
        price: '35.9',
        pay: 3322,
        baoyou: 1,
        tuihuo: 1,
        rexiao: 0,
        dianpu: '三只松鼠旗舰店',
        didian: '湖里',
        ishot: 1,
      }, {
        sli: 2,
        src: "/images/sp2.png",
        h2: "早餐营养全麦网红食品小蛋糕糕点",
        price: '35.9',
        pay: 3322,
        baoyou: 0,
        tuihuo: 0,
        rexiao: 1,
        dianpu: '三只松鼠旗舰店',
        didian: '思明',
        ishot: 1,
      }, {
        sli: 3,
        src: "/images/sp2.png",
        h2: "早餐营养全麦网红食品小蛋糕糕点",
        price: '35.9',
        yuanprice: '35.9',
        pay: 3322,
        baoyou: 1,
        tuihuo: 0,
        rexiao: 0,
        dianpu: '三只松鼠旗舰店',
        didian: '集美',
        ishot: 1,
      }, {
        sli: 4,
        src: "/images/sp1.png",
        h2: "早餐营养全麦网红食品小蛋糕糕点",
        price: '5000',
        pay: 3322,
        baoyou: 0,
        tuihuo: 0,
        rexiao: 0,
        dianpu: '三只松鼠旗舰店',
        didian: '思明',
        ishot: 1,
      }, {
        sli: 1,
        src: "/images/sp2.png",
        h2: "早餐营养全麦网红食品小蛋糕糕点",
        price: '35.9',
        pay: 3322,
        baoyou: 1,
        tuihuo: 0,
        rexiao: 0,
        dianpu: '三只松鼠旗舰店',
        didian: '湖里',
        ishot: 1,
      },
      {
        sli: 1,
        src: "/images/sp2.png",
        h2: "早餐营养全麦网红食品小蛋糕糕点",
        price: '35.9',
        pay: 3322,
        baoyou: 1,
        tuihuo: 0,
        rexiao: 0,
        dianpu: '三只松鼠旗舰店',
        didian: '湖里',
        ishot: 1,
      }
    ],
    leftList: [],
    rightList: [],
    items: [{
        name: '0',
        value: '包邮',
        checked: true
      },
      {
        name: '1',
        value: '七天无理由退货',
        checked: false
      },
      {
        name: '2',
        value: '积分抵扣',
        checked: false
      },
      {
        name: '3',
        value: '马上发货',
        checked: false
      },
      {
        name: '4',
        value: '当日达',
        checked: false
      },
      {
        name: '5',
        value: '24小时内发货',
        checked: false
      },
      {
        name: '6',
        value: '周末上班',
        checked: false
      },
      {
        name: '7',
        value: '全年无休',
        checked: false
      },
      {
        name: '8',
        value: '免预约',
        checked: false
      },
      {
        name: '9',
        value: '节假日可用',
        checked: false
      },
    ],
  },

  onLoad: function() {
    var that = this;


    that.setData({
      lanmu: that.getlanmu(),
    })


    wx.getSystemInfo({
      success: function(res) {
        const lineShowNum = 5;
        let floatPercent = 10 / lineShowNum / 10;
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight,
          mainwinHeight: res.windowHeight - 107,
          indicatorLineWidth: lineShowNum / (that.data.lanmu.length / 2) * 100 + '%',
          activitiesWrapWidth: res.windowWidth * floatPercent * (that.data.lanmu.length / 2) + 'px',
          activitiesItemWidth: res.windowWidth * floatPercent + 'px',
        });
      }

    });



    app.editTabBar(); // 调用tabbar
    that.isLeft();

    // wx.createSelectorQuery().select('#nav').boundingClientRect(rect => {
    //   console.log("nav距离顶部的距离：")
    //   console.log(rect)
    //   that.setData({
    //     navTop: rect.top - 171
    //   })
    // }).exec()
  },

  onShow: function() {
    var that = this;


  },

  onPageScroll: function(e) {
    var that = this;
    console.log("滚动条距离：")
    console.log(e.scrollTop);
    console.log("navTop:" + that.data.navTop)
    console.log("mainwinHeight:" + that.data.mainwinHeight)

    wx.createSelectorQuery().select('#nav').boundingClientRect(rect => {
      console.log("nav距离顶部的距离：")
      console.log(rect)
      that.setData({
        navTop: rect.top
      })
      if (rect.top <= 10) {
        that.setData({
          navFixed: true,
          marHeishangpin: 50,
        })
      }else{
        that.setData({
          navFixed: false,
          marHeishangpin: 0,
        })
      }
    }).exec()

  

    // if (e.scrollTop >= that.data.navTop) {
    //   if (that.data.navFixe) {
    //     return;
    //   }
    //   that.setData({
    //     navFixed: true,
    //     marHeishangpin: 50,
    //     mainwinHeight: that.data.mainwinHeight - 36
    //   })
    // } else {
    //   that.setData({
    //     navFixed: false,
    //     marHeishangpin: 0,
    //     mainwinHeight: that.data.winHeight - 107
    //   })
    // }

  },


  async isLeft() {
    const {
      list,
      leftList,
      rightList
    } = this.data;
    query = wx.createSelectorQuery();
    for (const item of list) {
      leftHeight <= rightHeight ? leftList.push(item) : rightList.push(item); //判断两边高度，来觉得添加到那边
      await this.getBoxHeight(leftList, rightList);
    }
  },
  getBoxHeight(leftList, rightList) { //获取左右两边高度
    return new Promise((resolve, reject) => {
      this.setData({
        leftList,
        rightList
      }, () => {
        query.select('#left').boundingClientRect();
        query.select('#right').boundingClientRect();
        query.exec((res) => {
          leftHeight = res[0].height; //获取左边列表的高度
          rightHeight = res[1].height; //获取右边列表的高度
          resolve();
        });
      });
    })
  },


  banImgHei: function(e) {
    var that = this;
    var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
    var imgh = e.detail.height;
    var imgw = e.detail.width;
    var swiperH = winWid * imgh / imgw + "px"

    that.setData({
      hei: swiperH
    })
  },

  bindscroll: function(e) {
    var that = this;
    that.setData({
      indicatorMarginLeft: e.detail.scrollLeft / e.detail.scrollWidth * 100 + '%'
    })
  },

  getlanmu: function() { //获取栏目块内容
    return [{
        imgUrl: '/images/lanmu1.png',
        linkUrl: '/pages/test/test',
        name: '美食'
      },
      {
        imgUrl: '/images/lanmu1.png',
        linkUrl: '/pages/test/test',
        name: '生鲜'
      },
      {
        imgUrl: '/images/lanmu1.png',
        linkUrl: '/pages/test/test',
        name: '酒水'
      },
      {
        imgUrl: '/images/lanmu1.png',
        linkUrl: '/pages/test/test',
        name: '茶叶'
      },
      {
        imgUrl: '/images/lanmu1.png',
        linkUrl: '/pages/test/test',
        name: '运动'
      },
      {
        imgUrl: '/images/lanmu1.png',
        linkUrl: '/pages/test/test',
        name: '母婴'
      },
      {
        imgUrl: '/images/lanmu1.png',
        linkUrl: '/pages/test/test',
        name: '汽车'
      },
      {
        imgUrl: '/images/lanmu1.png',
        linkUrl: '/pages/test/test',
        name: '娱乐'
      },
      {
        imgUrl: '/images/lanmu1.png',
        linkUrl: '/pages/test/test',
        name: '酒店'
      },
      {
        imgUrl: '/images/lanmu1.png',
        linkUrl: '/pages/test/test',
        name: '周边'
      },
      {
        imgUrl: '/images/lanmu1.png',
        linkUrl: '/pages/test/test',
        name: '美食1'
      },
      {
        imgUrl: '/images/lanmu1.png',
        linkUrl: '/pages/test/test',
        name: '美食2'
      },
    ]
  },

  shaixuanChe: function(e) {
    var that = this;
    console.log(e);
    var _cheid = e.currentTarget.dataset.checked;
    var _cheindex = e.currentTarget.dataset.index;
    if (_cheid == true) {
      that.setData({
        ['items[' + _cheindex + '].checked']: false
      });
    } else {
      that.setData({
        ['items[' + _cheindex + '].checked']: true
      });
    }
  },





})