Page({
  //不需要渲染到wxml的数据存储在jsData中
  jsData: {
    columnsHeight: [0, 0],
    isLoading: false
  },
  data: {
    columns: [
      [],
      []
    ],
    tempPics: []
  },
  //获取图片尺寸数据
  loadPic: function(e) {
    var that = this,
      data = that.data,
      tempPics = data.tempPics,
      index = e.currentTarget.dataset.index
    if (tempPics[index]) {
      //以750为宽度算出相对应的高度
      tempPics[index].height = e.detail.height * 750 / e.detail.width
      tempPics[index].isLoad = true
    }
    that.setData({
      tempPics: tempPics
    }, function() {
      that.finLoadPic()
    })
  },
  //图片加载错误处理
  loadPicError: function(e) {
    var that = this,
      data = that.data,
      tempPics = data.tempPics,
      index = e.currentTarget.dataset.index
    if (tempPics[index]) {
      //图片加载错误时高度固定750，展示为正方形
      tempPics[index].height = 750
      tempPics[index].isLoad = true
    }
    that.setData({
      tempPics: tempPics
    }, function() {
      that.finLoadPic()
    })
  },
  //判断图片是否加载完成
  finLoadPic: function() {
    var that = this,
      data = that.data,
      tempPics = data.tempPics,
      length = tempPics.length,
      fin = true
    for (var i = 0; i < length; i++) {
      if (!tempPics[i].isLoad) {
        fin = false
        break
      }
    }
    if (fin) {
      wx.hideLoading()
      if (that.jsData.isLoading) {
        that.jsData.isLoading = false
        that.renderPage()
      }
    }
  },
  //渲染到瀑布流
  renderPage: function() {
    var that = this,
      data = that.data,
      columns = data.columns,
      tempPics = data.tempPics,
      length = tempPics.length,
      columnsHeight = that.jsData.columnsHeight,
      index = 0
    for (var i = 0; i < length; i++) {
      index = columnsHeight[1] < columnsHeight[0] ? 1 : 0
      columns[index].push(tempPics[i])
      columnsHeight[index] += tempPics[i].height
    }
    that.setData({
      columns: columns,
      tempPics: []
    })
      console.log(columns)
    that.jsData.columnsHeight = columnsHeight
  },
  //加载数据
  loadData: function() {
    var that = this
    if (!that.jsData.isLoading) {
      wx.showLoading()
      that.jsData.isLoading = true
      setTimeout(function() {
        var pics = []
        pics.push({
          pic: 'https://res.wx.qq.com/wxdoc/dist/assets/img/5106.d1c51378.png'
        })
        pics.push({
          pic: 'https://res.wx.qq.com/wxdoc/dist/assets/img/5101.c1db6a96.png'
        })
        pics.push({
          pic: 'https://res.wx.qq.com/wxdoc/dist/assets/img/5102.332bb21d.png'
        })
        //插入一张无法加载的图片
        pics.push({
          pic: 'https://www.404.com/404.png'
        })
        pics.push({
          pic: 'https://res.wx.qq.com/wxdoc/dist/assets/img/5109.c1a972f0.png'
        })
        pics.push({
          pic: 'https://res.wx.qq.com/wxdoc/dist/assets/img/5103.47e64f38.png'
        })
        pics.push({
          pic: 'https://res.wx.qq.com/wxdoc/dist/assets/img/5104.401091c6.png'
        })
        pics.push({
          pic: 'https://res.wx.qq.com/wxdoc/dist/assets/img/51203.97d4269b.png'
        })
        pics.push({
          pic: 'https://res.wx.qq.com/wxdoc/dist/assets/img/5803.c3f8aebf.png'
        })
        pics.push({
          pic: 'https://res.wx.qq.com/wxdoc/dist/assets/img/5801.6e96cbf2.png'
        })
        that.setData({
          tempPics: pics
        })
      }, 1000)
    }
  },
  onLoad: function() {
    this.loadData()
  },
  onReachBottom: function() {
    this.loadData()
  },
})