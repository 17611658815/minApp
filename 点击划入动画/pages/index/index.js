//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        click: false, //是否显示弹窗内容
        option: false, //显示弹窗或关闭弹窗的操作动画
    },

    // 用户点击显示弹窗
    clickPup: function () {
        let _that = this;
        if (!_that.data.click) {
            _that.setData({
                click: true,
            })
        }

        if (_that.data.option) {
            _that.setData({
                option: false,
            })
            // 关闭显示弹窗动画的内容，不设置的话会出现：点击任何地方都会出现弹窗，就不是指定位置点击出现弹窗了
            setTimeout(() => {
                _that.setData({
                    click: false,
                })
            }, 500)

        } else {
            _that.setData({
                option: true
            })
        }
    },


})
