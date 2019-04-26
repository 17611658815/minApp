
// var  QQMapWX = require('/qqmap-wx-jssdk.min.js');
// var bmap = require('../js/api/bmap-wx.min.js');
Page({
  data:{
    city:'',
    locations:{},//
  },
onLoad(){
  var _this = this;

  //调用定位方法
  // console.log(bmap)
  _this.getCenterLocation()
  _this.getUserLocation();
},
  //定位方法
  getUserLocation: function () {
    var _this = this;
    wx.getSetting({
      success: (res) => {
        // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
        // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
        // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
          //未授权
          wx.showModal({
            title: '请求授权当前位置',
            content: '需要获取您的地理位置，请确认授权',
            success: function (res) {
              if (res.cancel) {
                //取消授权
                console.log('拒绝授权')
                wx.showToast({
                  title: '拒绝授权',
                  icon: 'none',
                  duration: 1000
                })
              } else if (res.confirm) {
                //确定授权，通过wx.openSetting发起授权请求
                console.log('确定授权')
                wx.openSetting({
                  success: function (res) {
                    if (res.authSetting["scope.userLocation"] == true) {
                      wx.showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 1000
                      })
                      //再次授权，调用wx.getLocation的API
                      _this.geo();
                    } else {
                      wx.showToast({
                        title: '授权失败',
                        icon: 'none',
                        duration: 1000
                      })
                    }
                  }
                })
              }
            }
          })
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          //用户首次进入页面,调用wx.getLocation的API
          _this.geo();
        }
        else {
          console.log('授权成功')
          //调用wx.getLocation的API
          _this.geo();

        }
      }
    })
  },
  // 获取定位城市

  geo: function () {
    var _this = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed 
        var accuracy = res.accuracy
        wx.request({ //百度地图api
          url: 'https://api.map.baidu.com/geocoder/v2/?ak=ejqb3nhjN2fx1UVdaNQAbQHbgUONiutG&location=' + res.latitude + ',' + res.longitude + '&output=json',

          data: {},

          header: { 'Content-Type': 'application/json' },

          success: function (res) {
                 console.log(res)
            _this.setData({
              city: res.data.result.addressComponent,
              locations: res.data.result.location
            })
          },

          fail: function (resq) {
            wx.showModal({
              title: '信息提示',
              content: '请求失败',
              showCancel: false,
              confirmColor: '#f37938'
            });
          }
        })
      }
    })
  },
  // 地图获取位置
  //获取位置
  getCenterLocation: function () {
    var that = this;
    wx.getLocation({
      type: "wgs84",
      success: function (res) {
        console.log(res);

        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          // 标记点
          markers: [{
            iconPath: '/image/location.png',
            id: 0,
            latitude: res.latitude,
            longitude: res.longitude,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "当前位置",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "标题" },
            anchor: {}
          }],
          // 园
          circles: [{
            latitude: res.latitude,//维度
            longitude: res.longitude,//经度
            radius: 10,
            strokeWidth: 2,
            fillColor: "#FAFAD2",
            color: "#90EE90"
          }],
          // 控件
          controls: [{
            id: 1001,
            position: { left: 10, top: 10, width: 35, height: 35 },
            iconPath: '/image/location.png',
            clickable: true
          }],
        })
      },
    })
  },
  // 移动位置
  moveToLocation: function () {
    // 设置权限
    wx.openSetting({
      success: function (res) {
        console.log(res);

        // 选择位置
        wx.chooseLocation({
          success: function (res) {
            console.log(res);
            // 打开位置
            wx.openLocation({
              latitude: res.latitude,
              longitude: res.longitude,
              name: res.name,
              address: res.address,
            })
          },
        })
      }
    })
  },
  // 移动标注
  translateMarker: function () {

  },
  // 缩放视野
  includePoints: function () {

  }
})

