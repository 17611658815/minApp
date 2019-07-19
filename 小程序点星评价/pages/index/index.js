//index.js
//获取应用实例
const app = getApp()
const beas64 = require('beas64.js')

Page({
    data: { diagnosisStar: 1 },
    iconArr:[],//星星图标
    onLoad(){
        this.setData({
            iconArr: beas64  
        })
    },
    // 获取点击的星位
    getStar(e) {
        let star = e.currentTarget.dataset.star;
        console.log(star)
        this.setData({ diagnosisStar: star });
    },
})
