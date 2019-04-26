const app = getApp()

let _w = 342
let _h = 182
let _x = 10
let _y = 50

Page({
    data: {
        movableViewWidth: _w,
        movableViewHeight: _h,
        movableViewX: _x,
        movableViewY: _y,
        lastWidth: _w,
        lastHeight: _h,
        lastX: _x,
        lastY: _y,
    },
    onLoad: function() {
        console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
        console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
    },

    /**
     * 监听 movable change
     */
    movableItemChange: function (e) {
        if (this.startScale) {
            return
        }
        this.setData({
            movableViewX: e.detail.x,
            movableViewY: e.detail.y,
            lastX: e.detail.x,
            lastY: e.detail.y,
        })
    },

    /**
     * 缩放元素-开始触摸
     * 记录起始位置
     */
    scaleItemTouchStart: function(e) {
        this.startScale = true
        let index = e.currentTarget.dataset.index

        this.setData({
            curItemTouchClientX: e.touches[0].clientX,
        })
    },

    /**
     * 缩放元素-缩放中
     */
    scaleItemTouchMove: function(e) {
        let index = e.currentTarget.dataset.index
        let list = this.data.movableItemList

        let baseWidth = this.data.lastWidth
        let baseHeight = this.data.lastHeight
        let baseX = this.data.lastX + baseWidth / 2
        let baseY = this.data.lastY + baseHeight / 2
        console.log(baseX, baseY)

        let scaleValue = (e.changedTouches[0].clientX / this.data.curItemTouchClientX).toFixed(2)

        let newWidth = (baseWidth * scaleValue).toFixed(2)
        let newHeight = (baseHeight * scaleValue).toFixed(2)

        this.setData({
            movableViewWidth: newWidth,
            movableViewHeight: newHeight,
            movableViewX: baseX - newWidth / 2,
            movableViewY: baseY - newHeight / 2,
        })
    },

    /**
     * 缩放元素-结束
     */
    scaleItemTouchEnd: function(e) {
        this.startScale = false
        this.setData({
            lastWidth: this.data.movableViewWidth,
            lastHeight: this.data.movableViewHeight,
            lastX: this.data.movableViewX,
            lastY: this.data.movableViewY
        })
    },
})