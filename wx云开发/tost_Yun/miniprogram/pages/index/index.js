//index.js
const app = getApp()
const db = wx.cloud.database()
Page({
  data: {
    avatarUrl: './user-unlogin.png',
    swiperCurrent: 0,
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    inpVal: '',
    inp2Val: '',
    list: [],
    slider: [{
        'img': '../../images/code-db-inc-dec.png'
      },
      {
        'img': '../../images/code-db-onAdd.png'
      },
      {
        'img': '../../images/code-db-inc-dec.png'
      },
    ],
    show:true

  },

  onLoad: function() {
    var that = this
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              that.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
    // that.getUSerMsg()
    that.getUserMsg()
    that.getAskInfo()
  },
  // 轮播图下标
  changDot(e) {
    this.setData({
      swiperCurrent: e.detail.current
    });
  },

  // 2. 构造查询语句
  // collection 方法获取一个集合的引用
  // where 方法传入一个对象，数据库返回集合中字段等于指定值的 JSON 文档。API 也支持高级的查询条件（比如大于、小于、in 等），具体见文档查看支持列表
  // get 方法会触发网络请求，往数据库取数据


  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  }, getAskInfo() {
    var that = this
    wx.request({
      url: 'https://api.douban.com/v2/movie/new_movies',
      header: {
        'content-type': 'application/xml' // 默认值
      },
      methods:"GET",
      success: function (res) {
        console.log(res)
      
      }
    })
  },

  // 上传图片
  doUpload: function() {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]

        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath

            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },
  getName(e) {
    this.setData({
      inpVal: e.detail.value
    })
  },

  getAge(e) {
    this.setData({
      inp2Val: e.detail.value
    })
  },
  //获取信息
  getUserMsg() {
    var that = this
    db.collection('data').get({
      success: function(res) {
        console.log(res)
        that.setData({
          list: res.data
        })
      }
    })
  },
  //添加信息
  setUserMsg() {
    var that = this
    if (app.globalData.userInfo == undefined) {
      that.GetUserInfo()
      return
    } else {
      db.collection('data').add({
        data: {
          created: new Date().getTime(),
          name: that.data.inpVal,
          age: that.data.inp2Val
        },
        success: function(res) {
          console.log(res)
          that.setData({
            inpVal: "",
            inp2Val: ""
          })
          console.log(that.data.inpVal + '--' + that.data.inp2Val)
          that.getUserMsg()
        }
      })
    }
    console.log(app.globalData)
  },
  //删除信息
  delUserMsg(e) {
    var that = this
    var id = e.currentTarget.dataset.id
    db.collection('data').doc(id).remove({
      success: function (res) {
        console.log(res)
        that.getUserMsg()
      }
    })
  },
  //修改信息
  changeMsg(e){
    var that = this
    var id = e.currentTarget.dataset.id
   
    db.collection('data').doc(id).get({
      success: function (res) {
        that.setData({
          inpVal: res.data.name,
          inp2Val: res.data.age,
          show: false,
          id:res.data._id
        })
      }
    })
   
  },
  updetMsg(e){
    var that = this
    var id = e.currentTarget.dataset.id
    db.collection('data').doc(id).update({
      data: {
        name: that.data.inpVal,
        age: that.data.inp2Val
      },
      success: function (res) {
        that.getUserMsg()
        that.setData({
          inpVal: '',
          inp2Val: '',
          show: true
        })
      }
    })
  },
  getUSerMsg() {
    // id查询
    // db.collection('data').doc('W5iK0oN2xHLyvFbf').get({
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })

    // db.collection('data').where({
    //   _openid: getApp().globalData.openid   //查询条件
    // })
    //   .get({
    //     success: function (res) {
    //       // res.data 是包含以上定义的两条记录的数组
    //       console.log(res.data)
    //     }
    //   })

    // db.collection('list').get({
    //   success: function (res) {
    //     console.log(res)   //获取所有数据
    //   }
    // })
    //更新集合字段
    // 
    // db.collection('data').doc(getApp().globalData.openid).update({
    //   data: {

    //     created: 10  //更新id为getApp().globalData.openid 的created字段为10
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
  },
  GetUserInfo() {
    var that = this
    wx.getUserInfo({
      success: res => {
        console.log(res)
        app.globalData.userInfo = res.userInfo
      }
    })
  },
  GetUserInfos() {
    var that = this
    wx.getSetting({
      success: res => {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              that.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  }


})