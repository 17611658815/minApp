var that
var items = require('data.js');
const App = getApp()

Page({
  data: {
      items: [],
  },
    onLoad: function () {
        that = this;
        /*模拟数据*/
        that.setData({
            items: items.data
        })
        console.group(items)
        console.log(items)
    },

    //手指触摸动作开始 记录起点X坐标
    touchstart: function (e) {
        //开始触摸时 重置所有删除
        let data = App.touch._touchstart(e, this.data.items)
        this.setData({
            items: data
        })
    },

    //滑动事件处理
    touchmove: function (e) {
        let data = App.touch._touchmove(e, this.data.items)
        this.setData({
            items: data
        })
    },

    //删除事件
    del: function (e) {
        wx.showModal({
            title: '提示',
            content: '确认要删除此条信息么？',
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                    that.data.items.splice(e.currentTarget.dataset.index, 1)
                    that.setData({
                        items: that.data.items
                    })
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    }

})
