//app.js
App({
  onLaunch: function() {
    var that = this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })


    that.witchTabBar(0);
    console.log("调用函数后");
    console.log(that.globalData.tabBar);
  },

  globalData: {
    userInfo: null,
    typeid: 0,
  },


  editTabBar: function() {
    var that = this;

    //使用getCurrentPages可以获取当前加载中所有的页面对象的一个数组，数组最后一个就是当前页面。
    var curPageArr = getCurrentPages(); //获取加载的页面
    var curPage = curPageArr[curPageArr.length - 1]; //获取当前页面的对象
    var pagePath = curPage.route; //当前页面url
    if (pagePath.indexOf('/') != 0) {
      pagePath = '/' + pagePath;
    }

    var tabBar = that.globalData.tabBar;
    console.log("tabBar:")
    console.log(tabBar)


    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == pagePath) {
        tabBar.list[i].active = true; //根据页面地址设置当前页面状态    
      }
    }

    curPage.setData({
      tabBar: tabBar
    });
  },


  witchTabBar: function(typeid) {
    var that = this;
    var tabBar = {};
    if (typeid == 0) {
      tabBar = {
        "color": "#808080",
        "selectedColor": "#ea1719",
        "backgroundColor": "#fff",
        "borderStyle": "#ccc",
        "list": [{
            "pagePath": "/pages/index/index",
            "text": "首页",
            "iconPath": "/images/bottom_icon01.png",
            "selectedIconPath": "/images/bottom_icon01.png",
            "clas": "menu-item",
          "selectedColor": "#ea1719",
            "color": "#808080",
            active: true
          },
          {
            "pagePath": "/pages/index/index",
            "text": "核销订单",
            "iconPath": "/images/bottom_icon02.png",
            "selectedIconPath": "/images/bottom_icon02.png",
            "selectedColor": "#ea1719",
            "clas": "menu-item",
            "color": "#808080",
            active: false
          },
          {
            "pagePath": "/pages/index/index",
            "text": "消息",
            "iconPath": "/images/bottom_icon03.png",
            "selectedIconPath": "/images/bottom_icon03.png",
            "selectedColor": "#ea1719",
            "clas": "menu-item",
            "color": "#808080",
            active: false
          },
          {
            "pagePath": "/pages/index/index",
            "text": "购物车",
            "iconPath": "/images/bottom_icon04.png",
            "selectedIconPath": "/images/bottom_icon04.png",
            "selectedColor": "#ea1719",
            "clas": "menu-item",
            "color": "#808080",
            active: false
          },
          {
            "pagePath": "/pages/index/index",
            "text": "我的",
            "iconPath": "/images/bottom_icon05.png",
            "selectedIconPath": "/images/bottom_icon05.png",
            "selectedColor": "#ea1719",
            "clas": "menu-item",
            "color": "#808080",
            active: false
          }
        ],
        "position": "bottom"
      }
    } else {
      tabBar = {
        "color": "#9E9E9E",
        "selectedColor": "#f00",
        "backgroundColor": "#fff",
        "borderStyle": "#ccc",
        "list": [{
            "pagePath": "/pages/demo/demo",
            "text": "职位",
            "iconPath": "/images/my.png",
            "selectedIconPath": "/images/my.png",
            "clas": "menu-item",
            "selectedColor": "#4EDF80",
            active: true
          },
          {
            "pagePath": "/pages/liubuju/liubuju",
            "text": "简历",
            "iconPath": "/images/my.png",
            "selectedIconPath": "/images/my.png",
            "selectedColor": "#4EDF80",
            "clas": "menu-item",
            active: false
          },
          {
            "pagePath": "/pages/index/index",
            "text": "我的",
            "iconPath": "/images/my.png",
            "selectedIconPath": "/images/my.png",
            "selectedColor": "#4EDF80",
            "clas": "menu-item",
            active: false
          }
        ],
        "position": "bottom"
      }
    }

    that.globalData.tabBar = tabBar;
  },


  //滑动渐入渐出
  slideupshow: function (that, param, px, opacity) {
    var animation = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease',
    });
    animation.translateY(px).opacity(opacity).step()
    //将param转换为key
    var json = '{"' + param + '":""}'
    json = JSON.parse(json);
    json[param] = animation.export()
    //设置动画
    that.setData(json);
  },



})