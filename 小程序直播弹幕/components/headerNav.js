// components/headerNav.js
let app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },
    attached: function () {
        let that =this;
        that.setData({
            height: app.globalData.navHeight,
            navTop: app.globalData.navTop,
            barHeight: app.globalData.barHeight,
            navLeft: app.globalData.windowWidth - app.globalData.navLeft,
        })
        console.log(app.globalData,29)
    },
    /**
     * 组件的初始数据
     */
    data: {
        height:0,    //头部高度
        navTop: 0,   //胶囊据顶部距离
        navLeft:0,   //胶囊居右距离
        barHeight:0, //胶囊高度
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
